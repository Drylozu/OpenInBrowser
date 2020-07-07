import open from "open";
import translate from "./i18n.js";

const path = window.require("path");

export function entry({ StatusBarItem, StaticConfig, RunningConfig }) {
    var file;
    const item = new StatusBarItem({
        label: translate("label", StaticConfig.data.appLanguage),
        hint: translate("hint", StaticConfig.data.appLanguage),
        action: () => {
            if (file)
                open(file);
        }
    });
    item.hide();
    RunningConfig.on("aTabHasBeenFocused", ({ directory }) => {
        const extension = path.extname(directory).toLowerCase();
        if (/\.(html|png|svg)$/.test(extension)) {
            file = directory;
            item.show();
        } else {
            file = null;
            item.hide();
        }
    });

    StaticConfig.keyChanged("appLanguage", (language) => {
        item.setLabel(translate("label", language));
        item.setHint(translate("hint", language));
    });
}