import TransformDirname from '../../utils/TransformDirname'

export default <VTTES.Module_Config> {
  filename: TransformDirname(__dirname),
  id: "scaleTokenNamesBySize",
  name: `Scale Token Names By Size`,
  description: `Scales canvas token names proportionally by their size. Smaller tokens display smaller names while larger ones have large names.`,
  category: VTTES.Module_Category.canvas,
  gmOnly: false,

  mods: [
    {
      includes: "vtt.bundle.js",
      // NOTE(justasd): search for _drawNameplate: function(d)
      // 2022-01-19
      find: `d.fillRect(...this._nameplate_data.position,...this._nameplate_data.size),d.fillStyle="rgb(0,0,0)",d.fillText(this._nameplate_data.name,0,this._nameplate_data.position[1]+m+this._nameplate_data.padding)`,
    
      patch: `window.r20es && window.r20es.prepNameplateBack && window.r20es.prepNameplateBack(this, d), d.fillRect(...this._nameplate_data.position,...this._nameplate_data.size),d.fillStyle="rgb(0,0,0)",
              window.r20es && window.r20es.prepNameplateText && window.r20es.prepNameplateText(this, d), d.fillText(this._nameplate_data.name,0,this._nameplate_data.position[1]+m+this._nameplate_data.padding)`
    }
  ],

  configView: {
    widthThreshold: {
      display: "The unit width of a token. Nameplates will not be scaled when a token has this width.",
      type: VTTES.Config_View_Type.Number
    },

    scaleIfLarger: {
      display: "Scale nameplate if token width is larger than the unit width.",
      type: VTTES.Config_View_Type.Checkbox,
    },

    scaleIfSmaller: {
      display: "Scale nameplate if token is smaller than the unit width.",
      type: VTTES.Config_View_Type.Checkbox,
    }
  },

  config: {
    widthThreshold: 70,
    scaleIfLarger: false,
    scaleIfSmaller: true,
  }
};
