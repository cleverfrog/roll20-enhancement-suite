import TransformDirname from '../../utils/TransformDirname'

export default <VTTES.Module_Config> {
  filename: TransformDirname(__dirname),
  id: "itemMenu",
  name: "Item Menu",
  description: "Creates a ribbon of draggable items, populated from a custom item json file.",
  category: VTTES.Module_Category.misc,
  gmOnly: true,

  media: {
    "item_ui.png": "Items",
  },

  config: {
    send_local_event_messages: true,
  },

  configView: {
    send_local_event_messages: {
      display: "Send local system messages for when you toggle/use the default camera",
      type: VTTES.Config_View_Type.Checkbox,
    },
  },
};
