// loads optional stylesheets async
function loadCss() {
    const stylesheet = /<link(?:\s[^.-\d][^\/\]'"[!#$%&()*+,;<=>?@^`{|}~ ]*(?:=(?:"[^"]*"|'[^']*'|[^'"<\s]*))?)*\s?\/?>/gi;
    const head = $("head");
    const css = $("#css-defer").text();
    let matches;
    while ((matches = stylesheet.exec(css)) !== null) {
        head.append(matches[0]);
    }
}

// try to load the page from the url parameters when the page loads
function loadContent() {
    let params = document.location.search || window.location.hash;
    if (params) {
        console.log("Found params to load from");

        if (params.startsWith("?") || params.startsWith("#")) {
            params = params.substring(1);
        }

        // update status
        $("#prompt").html('<h3 class="loading-error"><b>DEPRECATION NOTICE</b>' +
            '<br><br>This version of the web editor is deprecated. Please update LuckPerms.' +
            '<br><br>Redirecting you to a temporary site...</h3>');

        setTimeout(function() {
            window.location.replace("https://legacy.luckperms.net/editor/#" + params);
        }, 3000);
    }
}

// Do things when page has loaded
$(loadCss);
$(loadContent);
