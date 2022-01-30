import { R20Module } from "../../utils/R20Module"
import { R20 } from "../../utils/R20";
import {IOModuleCommon} from "../IOModuleCommon";
import {IResult} from "../../utils/Result";
import {IApplyableJukeboxPlaylist, JukeboxIO} from "../../utils/JukeboxIO";
import { DOM } from "../../utils/DOM";


const SHOW_MENU_IMG = "https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/png/32/map-marker.png"
const HIDE_MENU_IMG = "https://raw.githubusercontent.com/Rush/Font-Awesome-SVG-PNG/master/black/png/32/close.png";

class ItemListModule extends R20Module.OnAppLoadBase {

  public constructor() {
    super(__dirname);
  }

  try_loadFromBrowserCookie = () => {

    const page = R20.getCurrentPage();

    if(R20.isGM()) {
      const cfg = this.getHook().config;
      if(!cfg.move_if_gm) {
        return;
      }
    }
  }

  populateList() {
    const page = R20.getCurrentPage();


  }

  on_page_change = (is_first_load: boolean) => {

/*
    if(is_first_load) {
      setTimeout(this.try_jump_to_default_camera, 1000);
    }
    else {
      this.try_jump_to_default_camera();
    }
*/
    this.hide_menu();
  };

  toggle_menu_widget: HTMLElement|null;
  toggle_menu_widget_img: HTMLImageElement;
  menu_widget: HTMLElement;

  hide_menu = () => {
    if(this.menu_widget) {
      this.menu_widget.remove();
      this.menu_widget = null;
    }

    if(this.toggle_menu_widget_img) {
      this.toggle_menu_widget_img.src = SHOW_MENU_IMG;
    }
  }

  toggle = () => {
    const page = R20.getCurrentPage();

    {
      const cfg = this.getHook().config;
 
    }



    this.show_menu();
  }




  show_menu = () => {
    if(this.menu_widget) {
      this.menu_widget.remove();
      this.menu_widget = null;
    }

    this.toggle_menu_widget_img.src = HIDE_MENU_IMG;

    const style = {
      position: "absolute",
      top: "0px",
      right: "564px",
      zIndex: 11,
      backgroundColor: "white",
      borderBottom: "1px solid gray",
      padding: "10px",
      borderLeft: "1px solid gray",
      borderRight: "1px solid gray",
      maxWidth: "450px",
    };

    let controls = null;

    const page = R20.getCurrentPage();

    const set_from_current = <button className="btn" onclick={this.item_ui}>Item List</button>;



    this.menu_widget = (
      <div style={style}>
        <h3>ItemListDefault Camera Position (VTTES)</h3>
        <p>drag to sheet to add - as from compendium</p>
          
        <div style={{marginBottom: "16px"}}/>

        {controls}

      </div>
    );

    document.body.appendChild(this.menu_widget);
  };

  public setup() {
    window.r20es.onPageChange.on(this.on_page_change);

    if(R20.isGM()) {
      {
        const widgetStyle = {
          cursor: "pointer",
          position: "absolute",
          top: "0",
          right: "432px",
          maxWidth: "32px",
          maxHeight: "32px",
          zIndex: "10",
          backgroundColor: "lightgreen",
          padding: "0px 0px 1px",
          borderRadius: "3px",
        };


        const on_click = () => {
          if(this.menu_widget) {
            this.hide_menu();
          }
          else {
            this.show_menu();
          }
        };

        this.toggle_menu_widget_img = (
          <img src={SHOW_MENU_IMG} maxWidth="28" maxHeight="28" alt="CAM"/>
        );

        this.toggle_menu_widget = (
          <div title="Item List" style={widgetStyle} onclick={on_click}>
            {this.toggle_menu_widget_img}
          </div>
        );

        document.body.appendChild(this.toggle_menu_widget);
      }
    }
  }

  public dispose() {

    if(this.toggle_menu_widget) this.toggle_menu_widget.remove();
    if(this.menu_widget) this.menu_widget.remove();

    window.r20es.onPageChange.off(this.on_page_change);
    super.dispose();
  }
}

export default () => {
  new ItemListModule.install();
};

