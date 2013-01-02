  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Backbone.localStorage/backbone.localStorage-min.js at master · jeromegn/Backbone.localStorage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="brJk2nf5naqLPTar1Ux9ndVIXGk94g6sH2ZAujTmwnU=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-136f905f03a0a6ce0292d2e017a31c4fe548e2d0.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-2326d6d1fbc034bffa9b37cad622815f40671037.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-eee761b9d5e06efb064aaaf528c44ef8e1601e71.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-69e35ef6c3d5b779e39f65bd04a4e43ff670991e.js" type="text/javascript"></script>
    

        <link rel='permalink' href='/jeromegn/Backbone.localStorage/blob/7579615a928f44a133b8253c1405f0a286796d50/backbone.localStorage-min.js'>
    <meta property="og:title" content="Backbone.localStorage"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jeromegn/Backbone.localStorage"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="A localStorage adapter for Backbone.js. Contribute to Backbone.localStorage development by creating an account on GitHub."/>

    <meta name="description" content="A localStorage adapter for Backbone.js. Contribute to Backbone.localStorage development by creating an account on GitHub." />

  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

            
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="harthur" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/harthur" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/1c076cf3c465f363784904ed114a1e41?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> harthur
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="brJk2nf5naqLPTar1Ux9ndVIXGk94g6sH2ZAujTmwnU=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1022555" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/jeromegn/Backbone.localStorage/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/jeromegn/Backbone.localStorage/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">647</a>
          </li>

              <li>
                <a href="/jeromegn/Backbone.localStorage/fork_select" class="minibutton js-toggler-target lighter" rel="facebox nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/jeromegn/Backbone.localStorage/network" class="social-count">202</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jeromegn" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jeromegn</span>
                  </a></span> /
                <strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository">Backbone.localStorage</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/jeromegn/Backbone.localStorage" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/network" highlight="repo_network">Network</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>4</span></a></li>

      <li><a href="/jeromegn/Backbone.localStorage/issues" highlight="repo_issues">Issues <span class='counter'>15</span></a></li>

      <li><a href="/jeromegn/Backbone.localStorage/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/jeromegn/Backbone.localStorage/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jeromegn/Backbone.localStorage/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field js-ref-filter-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage-min.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>


          </div>

            <div class="js-filter-tab js-filter-tags filter-tab-empty" style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              </div>
              <div class="no-results">Nothing to show</div>
            </div>

        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jeromegn/Backbone.localStorage" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d7798be09afc7ba141658ae006527de8 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:d7798be09afc7ba141658ae006527de8 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span> / <strong class="final-path">backbone.localStorage-min.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="backbone.localStorage-min.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
      </div>

      <a href="/jeromegn/Backbone.localStorage/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/4vanger" rel="author">4vanger</a></span>
    <time class="js-relative-date" datetime="2012-12-14T09:11:40-08:00" title="2012-12-14 09:11:40">December 14, 2012</time>
    <div class="commit-title">
        <a href="/jeromegn/Backbone.localStorage/commit/d50284e4484ffc7a4307774526adb4777e5d40f4" class="message">Pass _ and Backbone to store them in closure </a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>9</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=jeromegn"><img height="20" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=dfcreative"><img height="20" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=juhovh"><img height="20" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andriijas" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=andriijas"><img height="20" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="4vanger" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=4vanger"><img height="20" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sontek" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=sontek"><img height="20" src="https://secure.gravatar.com/avatar/848c8fa8f54256aa570becc90123bee2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Dremora" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=Dremora"><img height="20" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spiralman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=spiralman"><img height="20" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="erichmenge" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js?author=erichmenge"><img height="20" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jeromegn">jeromegn</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dfcreative">dfcreative</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/juhovh">juhovh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/andriijas">andriijas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/4vanger">4vanger</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/848c8fa8f54256aa570becc90123bee2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sontek">sontek</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Dremora">Dremora</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/spiralman">spiralman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/erichmenge">erichmenge</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jeromegn/Backbone.localStorage/blob/7579615a928f44a133b8253c1405f0a286796d50/backbone.localStorage-min.js" data-title="Backbone.localStorage/backbone.localStorage-min.js at master · jeromegn/Backbone.localStorage · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>2 lines (1 sloc)</span>
                <span>2.375 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/jeromegn/Backbone.localStorage/edit/master/backbone.localStorage-min.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage-min.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage-min.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage-min.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">){</span><span class="kd">function</span> <span class="nx">S4</span><span class="p">(){</span><span class="k">return</span><span class="p">((</span><span class="mi">1</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">())</span><span class="o">*</span><span class="mi">65536</span><span class="o">|</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">guid</span><span class="p">(){</span><span class="k">return</span> <span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()}</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">=</span><span class="nx">name</span><span class="p">;</span><span class="kd">var</span> <span class="nx">store</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">store</span><span class="o">&amp;&amp;</span><span class="nx">store</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">[]};</span><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,{</span><span class="nx">save</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">))},</span><span class="nx">create</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">){</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">guid</span><span class="p">();</span><span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">)}</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="nx">model</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">()},</span><span class="nx">update</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()))</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="nx">model</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">()},</span><span class="nx">find</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">))},</span><span class="nx">findAll</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">).</span><span class="nx">chain</span><span class="p">().</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span><span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">id</span><span class="p">))},</span><span class="k">this</span><span class="p">).</span><span class="nx">compact</span><span class="p">().</span><span class="nx">value</span><span class="p">()},</span><span class="nx">destroy</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="o">=</span><span class="nx">_</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">record_id</span><span class="p">){</span><span class="k">return</span> <span class="nx">record_id</span><span class="o">==</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span><span class="k">return</span> <span class="nx">model</span><span class="p">},</span><span class="nx">localStorage</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">localStorage</span><span class="p">}});</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="kd">var</span> <span class="nx">store</span><span class="o">=</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span><span class="kd">var</span> <span class="nx">resp</span><span class="p">,</span><span class="nx">syncDfd</span><span class="o">=</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="o">&amp;&amp;</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span><span class="k">switch</span><span class="p">(</span><span class="nx">method</span><span class="p">){</span><span class="k">case</span><span class="s2">&quot;read&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="o">!=</span><span class="kc">undefined</span><span class="o">?</span><span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span><span class="o">:</span><span class="nx">store</span><span class="p">.</span><span class="nx">findAll</span><span class="p">();</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;create&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;update&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span><span class="s2">&quot;delete&quot;</span><span class="o">:</span><span class="nx">resp</span><span class="o">=</span><span class="nx">store</span><span class="p">.</span><span class="nx">destroy</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span><span class="k">break</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">resp</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="o">&amp;&amp;</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">resolve</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="o">&amp;&amp;</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;Record not found&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">reject</span><span class="p">()}</span><span class="k">return</span> <span class="nx">syncDfd</span><span class="o">&amp;&amp;</span><span class="nx">syncDfd</span><span class="p">.</span><span class="nx">promise</span><span class="p">()};</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="o">=</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">;</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span><span class="o">||</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="o">&amp;&amp;</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">){</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="p">}</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="p">};</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="p">(</span><span class="nx">model</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,[</span><span class="nx">method</span><span class="p">,</span><span class="nx">model</span><span class="p">,</span><span class="nx">options</span><span class="p">])}})(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>

      <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
      <div id="jump-to-line" style="display:none">
        <h2>Jump to Line</h2>
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
          <input class="textfield js-jump-to-line-field" type="text">
          <div class="full-button">
            <button type="submit" class="classy">
              Go
            </button>
          </div>
        </form>
      </div>

    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2012 <span title="0.06929s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07063' data-host='fe1'></span>
    
  </body>
</html>

