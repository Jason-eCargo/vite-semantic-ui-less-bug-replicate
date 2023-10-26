import fs from "fs";

export default function CustomiseSemanticUiLess() {
    return {
        name: "customise-semantic-ui-less",
        buildStart(options) {
            // Need to copy:
            // SemanticTheme/theme.config -> node_modules/semantic-ui-less/theme.config
            // SemanticTheme/theme.less -> node_modules/semantic-ui-less/theme.less
            fs.copyFileSync("./SemanticTheme/theme.config", "./node_modules/semantic-ui-less/theme.config");
            fs.copyFileSync("./SemanticTheme/theme.less", "./node_modules/semantic-ui-less/theme.less");
        }
    }
}
