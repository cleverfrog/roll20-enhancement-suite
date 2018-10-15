import MakeConfig from '../MakeConfig'; import Category from '../Category';
import ConfigViews from "../../utils/ConfigViews";

export default MakeConfig(__dirname, {
    id: "nightMode",
    name: "Night Mode",
    description: "Activates the dark night style. WARNING: some sheets might clash with the style changes resulting in ugly sheets.",
    category: Category.canvas,

    media: {
        "night_mode.png": "The night style in action."
    },

    configView: {
        overrideBackground: {
            display: "Force the canvas background to be black?",
            type: ConfigViews.Checkbox,
        },
        ogl5ESheet: {
            display: "OGL D&D 5E Night Mode",
            type: ConfigViews.Checkbox,
        },
        styleChat: {
            display: "Style chat?",
            type: ConfigViews.Checkbox,
        },
        baseStyle: {
            display: "Base style (disable this if you only want a dark canvas)",
            type: ConfigViews.Checkbox,
        }
    },

    config: {
        baseStyle: true,
        overrideBackground: true,
        enabled: false,
        ogl5ESheet: false,
        styleChat: true,
    },
});
