
window.projectVersion = '1.0.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Keboola" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Keboola.html">Keboola</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Keboola_Component" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Keboola/Component.html">Component</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Keboola_Component_Config" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Keboola/Component/Config.html">Config</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Keboola_Component_Config_BaseConfig" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Keboola/Component/Config/BaseConfig.html">BaseConfig</a>                    </div>                </li>                            <li data-name="class:Keboola_Component_Config_BaseConfigDefinition" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Keboola/Component/Config/BaseConfigDefinition.html">BaseConfigDefinition</a>                    </div>                </li>                            <li data-name="class:Keboola_Component_Config_ConfigInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Keboola/Component/Config/ConfigInterface.html">ConfigInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Keboola_Component_Manifest" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Keboola/Component/Manifest.html">Manifest</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Keboola_Component_Manifest_ManifestManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Keboola/Component/Manifest/ManifestManager.html">ManifestManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Keboola_Component_BaseComponent" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Keboola/Component/BaseComponent.html">BaseComponent</a>                    </div>                </li>                            <li data-name="class:Keboola_Component_UserException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Keboola/Component/UserException.html">UserException</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Keboola.html", "name": "Keboola", "doc": "Namespace Keboola"},{"type": "Namespace", "link": "Keboola/Component.html", "name": "Keboola\\Component", "doc": "Namespace Keboola\\Component"},{"type": "Namespace", "link": "Keboola/Component/Config.html", "name": "Keboola\\Component\\Config", "doc": "Namespace Keboola\\Component\\Config"},{"type": "Namespace", "link": "Keboola/Component/Manifest.html", "name": "Keboola\\Component\\Manifest", "doc": "Namespace Keboola\\Component\\Manifest"},
            {"type": "Interface", "fromName": "Keboola\\Component\\Config", "fromLink": "Keboola/Component/Config.html", "link": "Keboola/Component/Config/ConfigInterface.html", "name": "Keboola\\Component\\Config\\ConfigInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\Config\\ConfigInterface", "fromLink": "Keboola/Component/Config/ConfigInterface.html", "link": "Keboola/Component/Config/ConfigInterface.html#method_getData", "name": "Keboola\\Component\\Config\\ConfigInterface::getData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\ConfigInterface", "fromLink": "Keboola/Component/Config/ConfigInterface.html", "link": "Keboola/Component/Config/ConfigInterface.html#method_getValue", "name": "Keboola\\Component\\Config\\ConfigInterface::getValue", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Keboola\\Component", "fromLink": "Keboola/Component.html", "link": "Keboola/Component/BaseComponent.html", "name": "Keboola\\Component\\BaseComponent", "doc": "&quot;This is the core class that does all the heavy lifting. By default you don&#039;t need to setup anything. There are some\nextension points for you to use if you want to customise the behavior.&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method___construct", "name": "Keboola\\Component\\BaseComponent::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_setEnvironment", "name": "Keboola\\Component\\BaseComponent::setEnvironment", "doc": "&quot;Prepares environment. Sets error reporting for the app to fail on any\nerror, warning or notice. If your code emits notices and cannot be\nfixed, you can set &lt;code&gt;error_reporting&lt;\/code&gt; in &lt;code&gt;$application-&amp;gt;run()&lt;\/code&gt; method.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_loadConfig", "name": "Keboola\\Component\\BaseComponent::loadConfig", "doc": "&quot;Automatically loads configuration from datadir, instantiates specified\nconfig class and validates it with specified confing definition class&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_getConfigDefinitionClass", "name": "Keboola\\Component\\BaseComponent::getConfigDefinitionClass", "doc": "&quot;Override this method if you have custom config definition class. This\nallows you to validate and require config parameters and fail fast if\nthere is a missing parameter.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_setDataDir", "name": "Keboola\\Component\\BaseComponent::setDataDir", "doc": "&quot;Data dir is set without the trailing slash&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_getDataDir", "name": "Keboola\\Component\\BaseComponent::getDataDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_getConfig", "name": "Keboola\\Component\\BaseComponent::getConfig", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_getManifestManager", "name": "Keboola\\Component\\BaseComponent::getManifestManager", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_run", "name": "Keboola\\Component\\BaseComponent::run", "doc": "&quot;This is the main method for your code to run in. You have the &lt;code&gt;Config&lt;\/code&gt;\nand &lt;code&gt;ManifestManager&lt;\/code&gt; ready as well as environment set up.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_getConfigClass", "name": "Keboola\\Component\\BaseComponent::getConfigClass", "doc": "&quot;Class of created config. It&#039;s useful if you want to implment getters for\nparameters in your config. It&#039;s prefferable to accessing configuration\nkeys as arrays.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\BaseComponent", "fromLink": "Keboola/Component/BaseComponent.html", "link": "Keboola/Component/BaseComponent.html#method_loadManifestManager", "name": "Keboola\\Component\\BaseComponent::loadManifestManager", "doc": "&quot;Loads manifest manager with application&#039;s datadir&quot;"},
            
            {"type": "Class", "fromName": "Keboola\\Component\\Config", "fromLink": "Keboola/Component/Config.html", "link": "Keboola/Component/Config/BaseConfig.html", "name": "Keboola\\Component\\Config\\BaseConfig", "doc": "&quot;Offers basic abstraction over the JSON config. You can extend it and add your own getters for custom parameters.&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method___construct", "name": "Keboola\\Component\\Config\\BaseConfig::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getData", "name": "Keboola\\Component\\Config\\BaseConfig::getData", "doc": "&quot;Returns all the data in config as associative array&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getValue", "name": "Keboola\\Component\\Config\\BaseConfig::getValue", "doc": "&quot;Returns value by key. You can supply default value for when the key is missing.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getParameters", "name": "Keboola\\Component\\Config\\BaseConfig::getParameters", "doc": "&quot;Returns &lt;code&gt;parameters&lt;\/code&gt; section of the config&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getStorage", "name": "Keboola\\Component\\Config\\BaseConfig::getStorage", "doc": "&quot;Returns &lt;code&gt;storage&lt;\/code&gt; section of the config&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getImageParameters", "name": "Keboola\\Component\\Config\\BaseConfig::getImageParameters", "doc": "&quot;Returns &lt;code&gt;image_parameters&lt;\/code&gt; section of the config&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getAuthorization", "name": "Keboola\\Component\\Config\\BaseConfig::getAuthorization", "doc": "&quot;Returns &lt;code&gt;authorization&lt;\/code&gt; section of the config&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getAction", "name": "Keboola\\Component\\Config\\BaseConfig::getAction", "doc": "&quot;Returns &lt;code&gt;action&lt;\/code&gt; section of the config&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getInputFiles", "name": "Keboola\\Component\\Config\\BaseConfig::getInputFiles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getExpectedOutputFiles", "name": "Keboola\\Component\\Config\\BaseConfig::getExpectedOutputFiles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getInputTables", "name": "Keboola\\Component\\Config\\BaseConfig::getInputTables", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getExpectedOutputTables", "name": "Keboola\\Component\\Config\\BaseConfig::getExpectedOutputTables", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getOAuthApiData", "name": "Keboola\\Component\\Config\\BaseConfig::getOAuthApiData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getOAuthApiAppSecret", "name": "Keboola\\Component\\Config\\BaseConfig::getOAuthApiAppSecret", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfig", "fromLink": "Keboola/Component/Config/BaseConfig.html", "link": "Keboola/Component/Config/BaseConfig.html#method_getOAuthApiAppKey", "name": "Keboola\\Component\\Config\\BaseConfig::getOAuthApiAppKey", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Keboola\\Component\\Config", "fromLink": "Keboola/Component/Config.html", "link": "Keboola/Component/Config/BaseConfigDefinition.html", "name": "Keboola\\Component\\Config\\BaseConfigDefinition", "doc": "&quot;ConfigDefinition specifies the bare minimum of what should a config contain.&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfigDefinition", "fromLink": "Keboola/Component/Config/BaseConfigDefinition.html", "link": "Keboola/Component/Config/BaseConfigDefinition.html#method_getConfigTreeBuilder", "name": "Keboola\\Component\\Config\\BaseConfigDefinition::getConfigTreeBuilder", "doc": "&quot;Generates the configuration tree builder. You probably don&#039;t need to touch this.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfigDefinition", "fromLink": "Keboola/Component/Config/BaseConfigDefinition.html", "link": "Keboola/Component/Config/BaseConfigDefinition.html#method_getParametersDefinition", "name": "Keboola\\Component\\Config\\BaseConfigDefinition::getParametersDefinition", "doc": "&quot;Definition of parameters section. Override in extending class to validate parameters sent to the component early.&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\BaseConfigDefinition", "fromLink": "Keboola/Component/Config/BaseConfigDefinition.html", "link": "Keboola/Component/Config/BaseConfigDefinition.html#method_getRootDefinition", "name": "Keboola\\Component\\Config\\BaseConfigDefinition::getRootDefinition", "doc": "&quot;Root definition to be overridden in special cases&quot;"},
            
            {"type": "Class", "fromName": "Keboola\\Component\\Config", "fromLink": "Keboola/Component/Config.html", "link": "Keboola/Component/Config/ConfigInterface.html", "name": "Keboola\\Component\\Config\\ConfigInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\Config\\ConfigInterface", "fromLink": "Keboola/Component/Config/ConfigInterface.html", "link": "Keboola/Component/Config/ConfigInterface.html#method_getData", "name": "Keboola\\Component\\Config\\ConfigInterface::getData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Config\\ConfigInterface", "fromLink": "Keboola/Component/Config/ConfigInterface.html", "link": "Keboola/Component/Config/ConfigInterface.html#method_getValue", "name": "Keboola\\Component\\Config\\ConfigInterface::getValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Keboola\\Component\\Manifest", "fromLink": "Keboola/Component/Manifest.html", "link": "Keboola/Component/Manifest/ManifestManager.html", "name": "Keboola\\Component\\Manifest\\ManifestManager", "doc": "&quot;Handles everything related to generating and reading manifests for tables and files.&quot;"},
                                                        {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method___construct", "name": "Keboola\\Component\\Manifest\\ManifestManager::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method_getManifestFilename", "name": "Keboola\\Component\\Manifest\\ManifestManager::getManifestFilename", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method_writeFileManifest", "name": "Keboola\\Component\\Manifest\\ManifestManager::writeFileManifest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method_writeTableManifest", "name": "Keboola\\Component\\Manifest\\ManifestManager::writeTableManifest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method_getFileManifest", "name": "Keboola\\Component\\Manifest\\ManifestManager::getFileManifest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Keboola\\Component\\Manifest\\ManifestManager", "fromLink": "Keboola/Component/Manifest/ManifestManager.html", "link": "Keboola/Component/Manifest/ManifestManager.html#method_getTableManifest", "name": "Keboola\\Component\\Manifest\\ManifestManager::getTableManifest", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Keboola\\Component", "fromLink": "Keboola/Component.html", "link": "Keboola/Component/UserException.html", "name": "Keboola\\Component\\UserException", "doc": "&quot;Throw this exception whenever an expectation fails and user is able to fix it by supplying different configuration\nor data. Typical case is invalid parameter in config. Do not use it for any expectation failure, that is out of\nuser&#039;s reach. Such case would be when there are insufficient privledges to write a file.&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


