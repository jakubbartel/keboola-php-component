# Keboola PHP Component

[![Build Status](https://travis-ci.org/keboola/php-component.svg?branch=master)](https://travis-ci.org/keboola/php-component)
[![Code Climate](https://codeclimate.com/github/keboola/php-component/badges/gpa.svg)](https://codeclimate.com/github/keboola/php-component)

General library for php component running in KBC. The library provides function related to [Docker Runner](https://github.com/keboola/docker-bundle).

## Installation

```
composer install keboola/php-component
```

## Usage

Create a subclass of `BaseComponent`. 

```php
<?php declare(strict_types = 1);

namespace MyComponent;

use Keboola\Component\BaseComponent;

class Component extends BaseComponent
{
    public function run(): void
    {
        // get parameters
        $parameters = $this->getConfig()->getParameters();

        // get value of customKey.customSubkey parameter and fail if missing
        $customParameter = $this->getConfig()->getValue(['parameters', 'customKey', 'customSubkey']);

        // get value with default value if not present
        $customParameterOrNull = $this->getConfig()->getValue(['parameters', 'customKey'], 'someDefaultValue');

        // get manifest for input file
        $fileManifest = $this->getManifestManager()->getFileManifest('input-file.csv');

        // get manifest for input table
        $tableManifest = $this->getManifestManager()->getTableManifest('in.tableName');

        // write manifest for output file
        $this->getManifestManager()->writeFileManifest('out-file.csv', ['tag1', 'tag2']);

        // write manifest for output table
        $this->getManifestManager()->writeTableManifest('data.csv', 'out.report', ['id']);
    }
}

```

Use this `src/run.php` template. 

```php
<?php declare(strict_types = 1);

require __DIR__ . '/../vendor/autoload.php';

try {
    $app = new MyComponent\Component();
    $app->run();
    exit(0);
} catch (\Keboola\Component\UserException $e) {
    echo $e->getMessage();
    exit(1);
} catch (\Throwable $e) {
    echo get_class($e) . ':' . $e->getMessage();
    echo "\nFile: " . $e->getFile();
    echo "\nLine: " . $e->getLine();
    echo "\nCode: " . $e->getCode();
    echo "\nTrace: " . $e->getTraceAsString() . "\n";
    exit(2);
}
```

## Customizing config

### Custom getters in config

You might want to add getter methods for custom parameters in the config. That way you don't need to remember exact keys (`parameters.errorCount.maximumAllowed`), but instead use a method to retrieve the value (`$config->getMaximumAllowedErrorCount()`).

Simply create your own `Config` class, that extends `BaseConfig` and override `\Keboola\Component\BaseComponent::getConfigClass()` method to return your new class name. 

```php
class MyConfig extends \Keboola\Component\Config\BaseConfig 
{
    public function getMaximumAllowedErrorCount()
    {
        $defaultValue = 0;
        return $this->getValue(['parameters', 'errorCount', 'maximumAllowed'], $defaultValue);
    }
}
```
and
```php
class MyComponent extends \Keboola\Component\BaseComponent
{
    protected function getConfigClass(): string
    {
        return MyConfig::class;
    }
}
```

### Custom parameters validation

To validate input parameters extend `\Keboola\Component\Config\BaseConfigDefinition` class. By overriding the `getParametersDefinition()` method, you can validate the parameters part of the config. Make sure that you return the actual node you add, not `TreeBuilder`. You can use `parent::getParametersDefinition()` to get the default node or you can build it yourself. 

If you need to validate other parts of config as well, you can override `getRootDefinition()` method. Again, make sure that you return the actual node, not the `TreeBuilder`. 

```php
class MyConfigDefinition extends \Keboola\Component\Config\BaseConfigDefinition
{
    protected function getParametersDefinition()
    {
        $parametersNode = parent::getParametersDefinition();
        $parametersNode
            ->isRequired()
            ->children()
                ->arrayNode('errorCount')
                    ->isRequired()
                    ->children()
                        ->integerNode('maximumAllowed')
                            ->isRequired();
        return $parametersNode;
    }
}
```

Again you need to supply the new class name in your component

```php
class MyComponent extends \Keboola\Component\BaseComponent
{
    protected function getConfigDefinitionClass(): string
    {
        return MyConfigDefinition::class;
    }
}
```

If any constraint of config definition is not met a `UserException` is thrown. That means you don't need to handle the messages yourself. 

## More reading

For more information, please refer to the [generated docs](https://keboola.github.io/php-component/master/classes.html). See [development guide](https://developers.keboola.com/extend/component/tutorial/) for help with KBC integration.
