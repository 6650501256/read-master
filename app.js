/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright © DecSoft Utils - All rights reserved.
 Visit our website at: https://www.decsoftutils.com
 */

 const DabComponents = {
  "dab-http": DabHttp, "dab-html": DabHtml, "dab-timer": DabTimer, "dab-audio": DabAudio, "dab-video": DabVideo, "dab-frame": DabFrame, "dab-label": DabLabel, "dab-table": DabTable, "dab-image": DabImage, "dab-iframe": DabIFrame, "dab-figure": DabFigure, "dab-navbar": DabNavbar, "dab-sidebar": DabSidebar, "dab-carousel": DabCarousel, "dab-dropdown": Dabdropdown, "dab-progress": DabProgress, "dab-websocket": DabWebsocket, "dab-container": DabContainer, "dab-text-input": DabTextInput, "dab-image-push": DabImagePush, "dab-file-input": DabFileInput, "dab-push-button": DabPushButton, "dab-range-input": DabRangeInput, "dab-radio-input": DabRadioInput, "dab-number-input": DabNumberInput, "dab-select-input": DabSelectInput, "dab-switch-input": DabSwitchInput, "dab-checkbox-input": DabCheckboxInput, "dab-textarea-input": DabTextareaInput, "dab-multi-select-input": DabMultiSelectInput , "decsoft-selectex": selectEx,"decsoft-typeahead": typeahead,"decsoft-labelinput": labelInput,"decsoft-labeltext": labelText,"decsoft-labelselect": labelSelect,"decsoft-labelselectex": labelSelectEx
};




const dialogscafproce = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogscafproce",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogscafproce"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogscafproce").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogscafproce").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogscafproce" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 172.4299%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbEKW5J94/kJUvPDoHGvqZJ53yYKRazQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogscafstretegic = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogscafstretegic",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogscafstretegic"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogscafstretegic").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogscafstretegic").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogscafstretegic" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 172.4299%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUaotGBRg/96KX9LgKHLPUCasYvt0eaA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogscafmeta = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogscafmeta",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogscafmeta"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogscafmeta").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogscafmeta").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogscafmeta" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 172.4299%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUa6nnlnM/_ShEZYGcIKKeH2cBHMQ4PA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogconcep1 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogconcep1",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogconcep1"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogconcep1").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogconcep1").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogconcep1" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 172.4299%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGapMF3lRQ/mMyJBxQ4bdvvlvdt7XUOjQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogconcep2 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogconcep2",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogconcep2"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogconcep2").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogconcep2").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogconcep2" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogconcep3 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogconcep3",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogconcep3"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogconcep3").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogconcep3").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogconcep3" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogconcep4 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogconcep4",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogconcep4"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogconcep4").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogconcep4").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogconcep4" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogconcep5 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogconcep5",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogconcep5"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogconcep5").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogconcep5").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogconcep5" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialoghandout1 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialoghandout1",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialoghandout1"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      mounted() {
        let
          self = this;
        $("#dialoghandout1").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialoghandout1").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialoghandout1" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbOj_MbTE/AoBZD4TvUdnj3jLX9eRbLA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialoghandout2 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialoghandout2",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialoghandout2"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialoghandout2").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialoghandout2").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialoghandout2" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbO2kqGjY/r2RiJKPniL6tLGQqSNmZaQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialoghandout3 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialoghandout3",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialoghandout3"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialoghandout3").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialoghandout3").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialoghandout3" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbPFumH9E/n7QFGRC6YErnPJN7F09qkw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialoghandout4 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialoghandout4",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialoghandout4"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialoghandout4").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialoghandout4").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialoghandout4" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbPF6_swQ/fJzhD8YcXoDrC5IDjh5CrQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialoghandout5 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialoghandout5",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialoghandout5"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialoghandout5").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialoghandout5").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialoghandout5" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-html v-bind="html1"><div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGbPff73Ik/QYEg_0toj4uRGK8Dg7daow/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogtask1 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogtask1",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          image2: {
            name: "image2",
            url: "images/467486206_894125075875015_203228027190204413_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogtask1"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image1: {
            name: "image1",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      mounted() {
        let
          self = this;
        $("#dialogtask1").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogtask1").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogtask1" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image v-bind="image2"></dab-image><dab-image-push v-bind="imgpush2"></dab-image-push><dab-image v-bind="image1"></dab-image></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogtask2 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogtask2",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogtask2"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467482257_1535664320472381_209855266310551488_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogtask2").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogtask2").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogtask2" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image-push v-bind="imgpush2"></dab-image-push><dab-image v-bind="image7"></dab-image><dab-image v-bind="image4"></dab-image></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogtask3 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogtask3",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          image7: {
            name: "image7",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogtask3"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467478196_3153670801441961_8293758573517373350_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogtask3").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogtask3").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogtask3" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image v-bind="image7"></dab-image><dab-image-push v-bind="imgpush2"></dab-image-push><dab-image v-bind="image4"></dab-image></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogtask4 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogtask4",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          image7: {
            name: "image7",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogtask4"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/462562307_603648668915134_2107280002560587655_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogtask4").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogtask4").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogtask4" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image v-bind="image7"></dab-image><dab-image-push v-bind="imgpush2"></dab-image-push><dab-image v-bind="image4"></dab-image></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const Ansbot11 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "Ansbot11",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          iframe1: {
            name: "iframe1",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://api.krusiphaluk.com/aichatdr001/",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["Ansbot11"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#Ansbot11").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#Ansbot11").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="Ansbot11" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-iframe v-bind="iframe1"></dab-iframe><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const Ansbot12 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "Ansbot12",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          iframe1: {
            name: "iframe1",
            title: " Created with Unregistered DecSoft App Builder",
            source: "",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["Ansbot12"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#Ansbot12").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#Ansbot12").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="Ansbot12" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-iframe v-bind="iframe1"></dab-iframe><dab-image-push v-bind="imgpush2"></dab-image-push></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const dialogtask5 = {
 components: DabComponents,
 created() {

 },
      data() {
        return {
          name: "dialogtask5",
          size: "xl",
          fullscreen: "",
          classes: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          imgpush2: {
            name: "imgpush2",
            image: "images/467482483_2721293638072634_6599786091826506622_n.png",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            tabIndex: -1,
            kind: "light",
            hidden: false,
            disabled: false,
            event: null,
            blurHandler() {},
            focusHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = dialogs["dialogtask5"].imgpush2;
                self.event = event;

app.hideDialogs();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467483312_449700214872511_3440448904920306731_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      mounted() {
        let
          self = this;
        $("#dialogtask5").on("show.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = self;
          app._setViewEvents(self);

        });
        $("#dialogtask5").on("hidden.bs.modal", function () {
          let
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.activeDialog = app._getActiveDialog();

        });
      },
      methods: {
        show() {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide() {
          $("#" + this.name).modal("hide");
        },
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<div id="dialogtask5" class="app-dialog modal fade" tabindex="-1" role="dialog"><div v-bind:class="['modal-dialog', 'modal-dialog-scrollable', 'modal-dialog-centered', 'modal-' + size, 'modal-' + fullscreen]" role="document"><div class="modal-content"><div v-bind:class="[classes, 'modal-body']"><dab-image v-bind="image1"></dab-image><dab-image-push v-bind="imgpush2"></dab-image-push><dab-image v-bind="image4"></dab-image></div></div></div></div>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };



const start = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "start",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "./images/474387906_1607266189924752_6586373827279564599_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467483572_2164457637289891_2646976368746657728_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["start"].image3;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/474278659_400956869740561_8413685259364857763_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/474632865_3775707716075585_5407541317368142080_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="start" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const home = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "home",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474447750_1133504998241458_7319366033986031112_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467475460_590872117225131_5242547452897977916_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image4;
                self.event = event;

app.showView('problem1');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image9: {
            name: "image9",
            url: "images/467476849_1768994313836713_4673463898932985853_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image9;
                self.event = event;

app.showView('problem2');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image10: {
            name: "image10",
            url: "images/466832041_1017671803525576_4378390615869316467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image10;
                self.event = event;

app.showView('problem3');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image11: {
            name: "image11",
            url: "images/467136290_899254962362920_2783300144135893031_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image11;
                self.event = event;

app.showView('problem4');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image12: {
            name: "image12",
            url: "images/467478146_1138297697964457_8419394508001460423_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image12;
                self.event = event;

app.showView('problem5');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["home"].image3;
                self.event = event;

app.showSidebar();


            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/Prototype APP.gif",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="home" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image9"></dab-image><dab-image v-bind="image10"></dab-image><dab-image v-bind="image11"></dab-image><dab-image v-bind="image12"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const collaboration = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "collaboration",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/471126744_482636457793399_2460171860503987380_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["collaboration"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467482184_1282399589753575_3916635300489738518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["collaboration"].image2;
                self.event = event;

window.open('https://meet.google.com/bdj-uuef-mbh', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467480829_506895595138027_5570004518269513739_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["collaboration"].image4;
                self.event = event;

window.open('https://line.me/ti/g2/4T3GCLEMqCMGCMPpLVnofI4eoX7qxY9_NmHN4A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', '_system');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467478450_1159721875496556_6645640600818371703_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["collaboration"].image5;
                self.event = event;

window.open('https://classroom.google.com/c/NzM0MTk1NzQ3ODg2?cjc=r3q5sha', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="collaboration" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const coaching1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "coaching1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467481051_931649309073125_556821626548378056_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          carousel1: {
            name: "carousel1",
            source: {},
            sources: [
  {
    "url": "https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/472058360_10227273878223291_6310948724583341424_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEZNF6vck1Fr2dMPjs88ZNeLLa0kbM79zgstrSRszv3OFV8LOZWzKVnHNSD2SzAuno&_nc_ohc=OXGqupu-kfMQ7kNvgHPmr8R&_nc_oc=AdjNoWgE3YqLlnKsyPpNyEL3rgxKuMAAx_W0lqSUBoST_xYrAAZzICZFSbvvDtNDH4vjk_6wnLY2x0-BOpaLDeAv&_nc_zt=23&_nc_ht=scontent.futh1-1.fna&_nc_gid=ATbD-LFxiJskppv6UCDmeVu&oh=00_AYCoCJFQ8xBImfZrHOY423JFuXyzWGwE2PHE_dt6tLhOUQ&oe=677A14A9",
    "caption": ""
  },
  {
    "url": "https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/472130441_10227273878543299_2105089143686064368_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGsje7oVunJfiQf0pPHNQQ07QaAWIRswzLtBoBYhGzDMpRAXczg_RcUqtm6HtAyWxc&_nc_ohc=b45o8q18TiEQ7kNvgFgCmsP&_nc_oc=AdgzjeyNpX6h1nvy8Hb7znfpVpvoZL80BBtXGc8HmaVPSSoXhJZ2VrYDoCJXfsQpgopMzMXo7EiLTuTGX6SXOAGF&_nc_zt=23&_nc_ht=scontent.futh1-1.fna&_nc_gid=ATbD-LFxiJskppv6UCDmeVu&oh=00_AYAZrCDshSNUrMDoUHB9SdRsNSwRAvVGf1rMpNmgeEoq0A&oe=677A1163",
    "caption": ""
  },
  {
    "url": "https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-6/471918473_10227273907384020_5778482665322131878_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGMeD8CwfK3gip_nu1kfh8z6oDvAGqDS-7qgO8AaoNL7sDfRsE43I2Fn_DPrVjmeSw&_nc_ohc=GNjUOMdpkPIQ7kNvgH06gtW&_nc_oc=AdjRVVSZrVM-mHcOn1q-ilT0BVUEAqKym7iRVK0e9IyofmF9a_SkP7SjoA6JqvnQa8rfkQoZ9Ohhggz_9keRFVEP&_nc_zt=23&_nc_ht=scontent.futh1-1.fna&_nc_gid=Alr4izVWK5bplzynvhIbgt-&oh=00_AYDsoKuLHhQokZXLC_sTmcn0kPtygVEG9zuLT9ZcJzLCeQ&oe=677A1096",
    "caption": ""
  }
],
            controls: true,
            indicators: true,
            captions: true,
            fade: false,
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            interval: 5000,
            hidden: false,
            event: null,
            next() {
              $("#" + this.name).find(".carousel").carousel("next");
            },
            prev() {
              $("#" + this.name).find(".carousel").carousel("prev");
            },
            cycle() {
              $("#" + this.name).find(".carousel").carousel("cycle");
            },
            pause() {
              $("#" + this.name).find(".carousel").carousel("pause");
            },
            slideClickHandler(event, index, source) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["coaching1"].carousel1;
                self.event = event;
                self.source = source;
                self.source.index = index;

            },
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["coaching1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="coaching1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-carousel v-bind="carousel1"></dab-carousel><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const coaching2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "coaching2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467482220_1762090844568276_7367345469732418851_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["coaching2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="coaching2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const problem1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "problem1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: true,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467486206_894125075875015_203228027190204413_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467470411_2318354041853443_1420735777515935467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem1"].image5;
                self.event = event;

app.showView('taskQ1');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image1: {
            name: "image1",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          html3: {
            name: "html3",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="problem1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-html v-bind="html1"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="440"
    height="225"
    src="https://www.youtube.com/embed/lDTxjerdICY"
    title="1  Finding the Main Idea"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image1"></dab-image><dab-html v-bind="html3"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="600"
    height="350"
    src="https://www.youtube.com/embed/lDTxjerdICY"
    title="1  Finding the Main Idea"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };
const problem2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "problem2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467470411_2318354041853443_1420735777515935467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem2"].image5;
                self.event = event;

app.showView('taskQ2');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467482257_1535664320472381_209855266310551488_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="problem2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-html v-bind="html1"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="440"
    height="225"
    src="https://www.youtube.com/embed/nh8askFd3zI"
    title="2 Scanning"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html><dab-image v-bind="image5"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const problem3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "problem3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image5: {
            name: "image5",
            url: "images/467470411_2318354041853443_1420735777515935467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem3"].image5;
                self.event = event;

app.showView('taskQ3');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467478196_3153670801441961_8293758573517373350_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="problem3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image5"></dab-image><dab-image v-bind="image4"></dab-image><dab-html v-bind="html1"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="440"
    height="225"
    src="https://www.youtube.com/embed/CW9sHgvpRb4"
    title="3 Identify Facts and Opinions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const problem4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "problem4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467470411_2318354041853443_1420735777515935467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem4"].image5;
                self.event = event;

app.showView('taskQ4');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/462562307_603648668915134_2107280002560587655_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="problem4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-html v-bind="html1"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="440"
    height="225"
    src="https://www.youtube.com/embed/6PRGhU3-7qo"
    title="4 Identify Supporting sentence new"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html><dab-image v-bind="image5"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const problem5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "problem5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467470411_2318354041853443_1420735777515935467_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem5"].image5;
                self.event = event;

app.showView('taskQ5');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467483312_449700214872511_3440448904920306731_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image1: {
            name: "image1",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["problem5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="problem5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-html v-bind="html1"><div style="display: flex; justify-content: center; align-items: center; height: auto; margin-top: 20px;">
  <iframe
    width="440"
    height="225"
    src="https://www.youtube.com/embed/9N_cwCDBqu0"
    title="5 Skimming"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
</dab-html><dab-image v-bind="image5"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image1"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const learning1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "learning1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning1"].image2;
                self.event = event;

app.showDialog('dialoghandout1');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: true,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467481092_608431001598689_2095170602926839404_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning1"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning1"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/473088412_1278581046591481_3243987042010227782_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/473827247_1263792791515955_2015559447510158482_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="learning1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-html v-bind="html1"><div style="position: relative; width: 80%; max-width: 853px; height: 0; padding-top: 46.2203%;
 margin: 0 auto; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUI_p_vUE/c9gPU_Rvgvj1Aeb-CjvGNQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const learning2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "learning2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474920997_1123148726019636_350891200216899090_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning2"].image2;
                self.event = event;

app.showDialog('dialoghandout2');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467481092_608431001598689_2095170602926839404_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning2"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning2"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUFxc2iSg/auBnL6wjwLg5WfsGk7N-vQ/view?utm_content=DAGUFxc2iSg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha365364620', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: true,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/473172848_1311044216688683_5055266776209634144_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/473088412_1278581046591481_3243987042010227782_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="learning2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-html v-bind="html1"><div style="position: relative; width: 80%; max-width: 853px; height: 0; padding-top: 46.2203%;
 margin: 0 auto; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUFxc2iSg/auBnL6wjwLg5WfsGk7N-vQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div></dab-html><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const learning3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "learning3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474920997_1123148726019636_350891200216899090_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning3"].image2;
                self.event = event;

app.showDialog('dialoghandout3');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467481092_608431001598689_2095170602926839404_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning3"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning3"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUIvYEvt4/XSXixd5c7YYuAHeWLFgYHg/view?utm_content=DAGUIvYEvt4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h61ea3a7c77', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/473776122_1608005160086356_768624525547260415_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/473088412_1278581046591481_3243987042010227782_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="learning3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const learning4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "learning4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474920997_1123148726019636_350891200216899090_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning4"].image2;
                self.event = event;

app.showDialog('dialoghandout4');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: true,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467481092_608431001598689_2095170602926839404_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning4"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning4"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUF2C2ikM/7Z92FAQEVvlY8N3Hsklw3A/view?utm_content=DAGUF2C2ikM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h96a6c9f34c', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/472685736_1116573166446575_7524649931556558634_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/473088412_1278581046591481_3243987042010227782_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="learning4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-html v-bind="html1"><div style="position: relative; width: 80%; max-width: 853px; height: 0; padding-top: 46.2203%;
 margin: 0 auto; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUF2C2ikM/fnX-wqx6acDsV2rB8P9ukw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const learning5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "learning5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474920997_1123148726019636_350891200216899090_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning5"].image2;
                self.event = event;

app.showDialog('dialoghandout5');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          html1: {
            name: "html1",
            classes: "",
            title: " Created with Unregistered DecSoft App Builder",
            hidden: true,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/467481092_608431001598689_2095170602926839404_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning5"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUI_p_vUE/t8S0Q7uSr1BE3pTSBPAPnA/view?utm_content=DAGUI_p_vUE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd1fcabfa', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467480340_605918535287513_7891851346030078966_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning5"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGamGrYayI/tkHgzTDFCb-fswmW_9Zj_g/view?utm_content=DAGamGrYayI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h26fbcd2ed9', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474376363_2602336979959129_2279308129474329260_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["learning5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/473088412_1278581046591481_3243987042010227782_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="learning5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-html v-bind="html1"><div style="position: relative; width: 80%; max-width: 853px; height: 0; padding-top: 46.2203%;
 margin: 0 auto; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;"
    src="https://www.canva.com/design/DAGUF2C2ikM/7Z92FAQEVvlY8N3Hsklw3A/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
</dab-html><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const compre1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "compre1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474243845_530917522661598_5289005837945942286_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467476931_899722362363054_8601569305860831973_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre1"].image2;
                self.event = event;

window.open('https://play.blooket.com/play?hwId=677055482bf8fe984820cd61', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre1"].image5;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="compre1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image5"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const compre2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "compre2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467473553_1986187851858463_4328728631286200179_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467476931_899722362363054_8601569305860831973_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre2"].image2;
                self.event = event;

window.open('https://play.blooket.com/play?hwId=677546f8040608efa3f0d9c4', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="compre2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const compre3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "compre3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467488961_1252345839398884_2987796817972196279_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467476931_899722362363054_8601569305860831973_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre3"].image2;
                self.event = event;

window.open('https://play.blooket.com/play?hwId=677547e9322992275db5399f', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="compre3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const compre4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "compre4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467480857_1109698213676950_3324532521828018961_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467476931_899722362363054_8601569305860831973_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre4"].image2;
                self.event = event;

window.open('https://play.blooket.com/play?hwId=677548312bf8fe984820cf75', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="compre4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const compre5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "compre5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/467480381_1282204833070206_7160949476805220860_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/467476931_899722362363054_8601569305860831973_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre5"].image2;
                self.event = event;

window.open('https://play.blooket.com/play?hwId=6775486b322992275db539a1', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["compre5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="compre5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const scaf1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "scaf1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467481132_1281456246520734_5536965352494544378_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf1"].image2;
                self.event = event;

app.showDialog('dialogconcep1');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/467471249_2395343744134083_5413752619905073150_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf1"].image6;
                self.event = event;

app.showDialog('dialogscafproce');


            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf1"].image7;
                self.event = event;

app.showDialog('dialogscafstretegic');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image8: {
            name: "image8",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf1"].image8;
                self.event = event;

app.showDialog('dialogscafmeta');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/474785199_1818178932269063_1466247874035543963_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474467620_1138033790825413_201835830058219640_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="scaf1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image8"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const scaf2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "scaf2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467481132_1281456246520734_5536965352494544378_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image2;
                self.event = event;

window.open('https://www.canva.com/design/DAGapO3mHcY/3nmSEb2tgIbX8kDr8fhOzA/view?utm_content=DAGapO3mHcY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haaee4d9456', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image4;
                self.event = event;

app.showDialog('dialogscafstretegic');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/467471249_2395343744134083_5413752619905073150_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image6;
                self.event = event;

app.showDialog('dialogscafproce');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUa6nnlnM/9qB3fC4hiRINZkYd9Lp2KA/view?utm_content=DAGUa6nnlnM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h498a05a262', '_system');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image8: {
            name: "image8",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image8;
                self.event = event;

app.showDialog('dialogscafmeta');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image9: {
            name: "image9",
            url: "images/474467620_1138033790825413_201835830058219640_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/473172848_1311044216688683_5055266776209634144_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="scaf2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image8"></dab-image><dab-image v-bind="image9"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const scaf3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "scaf3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467481132_1281456246520734_5536965352494544378_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image2;
                self.event = event;

window.open('https://www.canva.com/design/DAGapLbUQJY/ep_T4Iaiquwq3LGMvBM_BA/view?utm_content=DAGapLbUQJY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5dd3830c6c', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUaotGBRg/dtEvTg9JuXa-sjsQiuVISQ/view?utm_content=DAGUaotGBRg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85f9955f46', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUa6nnlnM/9qB3fC4hiRINZkYd9Lp2KA/view?utm_content=DAGUa6nnlnM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h498a05a262', '_system');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/467471249_2395343744134083_5413752619905073150_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image6;
                self.event = event;

app.showDialog('dialogscafproce');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image7;
                self.event = event;

app.showDialog('dialogscafstretegic');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image8: {
            name: "image8",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image8;
                self.event = event;

app.showDialog('dialogscafmeta');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image9: {
            name: "image9",
            url: "images/474467620_1138033790825413_201835830058219640_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image10: {
            name: "image10",
            url: "images/471807756_399688043202381_8104094352423751012_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="scaf3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image8"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image9"></dab-image><dab-image v-bind="image10"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const scaf4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "scaf4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467481132_1281456246520734_5536965352494544378_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image2;
                self.event = event;

window.open('https://www.canva.com/design/DAGapH3MbI0/N-sgqV19ryV2WR6xnzy_CA/view?utm_content=DAGapH3MbI0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h01433b86bd', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUaotGBRg/dtEvTg9JuXa-sjsQiuVISQ/view?utm_content=DAGUaotGBRg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85f9955f46', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUa6nnlnM/9qB3fC4hiRINZkYd9Lp2KA/view?utm_content=DAGUa6nnlnM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h498a05a262', '_system');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/467471249_2395343744134083_5413752619905073150_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image6;
                self.event = event;

app.showDialog('dialogscafproce');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image7;
                self.event = event;

app.showDialog('dialogscafstretegic');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image8: {
            name: "image8",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image8;
                self.event = event;

app.showDialog('dialogscafmeta');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image9: {
            name: "image9",
            url: "images/474467620_1138033790825413_201835830058219640_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image10: {
            name: "image10",
            url: "images/472690950_973192257479100_2061466295995459274_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="scaf4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image8"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image9"></dab-image><dab-image v-bind="image10"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const scaf5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "scaf5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/473137682_1011300917479516_3134192213312663391_n.jpg",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/467481132_1281456246520734_5536965352494544378_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image2;
                self.event = event;

window.open('https://www.canva.com/design/DAGapJuUYO0/8WwV15-7cRIGOOBR4B9rbw/view?utm_content=DAGapJuUYO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1bde89e7a9', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image4;
                self.event = event;

window.open('https://www.canva.com/design/DAGUaotGBRg/dtEvTg9JuXa-sjsQiuVISQ/view?utm_content=DAGUaotGBRg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85f9955f46', '_system');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: true,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image5;
                self.event = event;

window.open('https://www.canva.com/design/DAGUa6nnlnM/9qB3fC4hiRINZkYd9Lp2KA/view?utm_content=DAGUa6nnlnM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h498a05a262', '_system');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/467471249_2395343744134083_5413752619905073150_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image6;
                self.event = event;

app.showDialog('dialogscafproce');

            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/467476915_1505878000102632_934259578008098371_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image7;
                self.event = event;

app.showDialog('dialogscafstretegic');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image8: {
            name: "image8",
            url: "images/467479490_1966301110441932_1868879706807335602_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image8;
                self.event = event;

app.showDialog('dialogscafmeta');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["scaf5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image9: {
            name: "image9",
            url: "images/474467620_1138033790825413_201835830058219640_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image10: {
            name: "image10",
            url: "images/474493049_8471789222922878_1166537318105233994_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="scaf5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image8"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image9"></dab-image><dab-image v-bind="image10"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const task1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "task1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "Describe what the problem was and why she didn’t understand the reading passage by herself.",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "What reading technique should she use to deal with the problem? Describe how to use the reading technique.",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput2: {
            name: "labelInput2",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput2;
  self.event = event;

  
}

          },

          submit1: {
            name: "submit1",
            url: "images/472455594_955757506514521_8963750481230665637_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task1"].submit1;
                self.event = event;

app.showView('taskQ1');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput1: {
            name: "labelInput1",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task1"].labelInput1;
  self.event = event;

  
}

          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472581274_1749867265794275_161041647546699293_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task1"].image2;
                self.event = event;

app.showView('dialogtask1');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="task1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-label v-bind="label1"></dab-label><dab-label v-bind="label2"></dab-label><decsoft-labelinput v-bind="labelInput2" v-model="labelInput2.value"></decsoft-labelinput><dab-image v-bind="submit1"></dab-image><decsoft-labelinput v-bind="labelInput1" v-model="labelInput1.value"></decsoft-labelinput><dab-image v-bind="image3"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const task2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "task2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "What specific challenge does Emily face when trying to read or gather information?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "Do you think Emily’s problem can be solved? If yes, what could she try next time to overcome it?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput1: {
            name: "labelInput1",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput1;
  self.event = event;

  
}

          },

          labelInput2: {
            name: "labelInput2",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task2"].labelInput2;
  self.event = event;

  
}

          },

          submit2: {
            name: "submit2",
            url: "images/472455594_955757506514521_8963750481230665637_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task2"].submit2;
                self.event = event;

app.showView('task21');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task2"].image2;
                self.event = event;

app.showView('taskbot21');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="task2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-label v-bind="label1"></dab-label><dab-label v-bind="label2"></dab-label><decsoft-labelinput v-bind="labelInput1" v-model="labelInput1.value"></decsoft-labelinput><decsoft-labelinput v-bind="labelInput2" v-model="labelInput2.value"></decsoft-labelinput><dab-image v-bind="submit2"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const task3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "task3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "Why does Mark feel worried as he rereads the passage?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "How can Mark’s teacher help him understand how to tell facts from opinions?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput1: {
            name: "labelInput1",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput1;
  self.event = event;

  
}

          },

          labelInput2: {
            name: "labelInput2",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task3"].labelInput2;
  self.event = event;

  
}

          },

          submit3: {
            name: "submit3",
            url: "images/472455594_955757506514521_8963750481230665637_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task3"].submit3;
                self.event = event;

app.showView('task31');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task3"].image2;
                self.event = event;

app.showView('taskbot31');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="task3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-label v-bind="label1"></dab-label><dab-label v-bind="label2"></dab-label><decsoft-labelinput v-bind="labelInput1" v-model="labelInput1.value"></decsoft-labelinput><decsoft-labelinput v-bind="labelInput2" v-model="labelInput2.value"></decsoft-labelinput><dab-image v-bind="submit3"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const task4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "task4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "What makes it hard for Sally to understand the passage he is reading?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "If you are her friend, what would you suggest to her?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput1: {
            name: "labelInput1",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput1;
  self.event = event;

  
}

          },

          labelInput2: {
            name: "labelInput2",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task4"].labelInput2;
  self.event = event;

  
}

          },

          submit4: {
            name: "submit4",
            url: "images/472455594_955757506514521_8963750481230665637_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task4"].submit4;
                self.event = event;

app.showView('task41');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task4"].image2;
                self.event = event;

app.showView('taskbot41');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="task4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-label v-bind="label1"></dab-label><dab-label v-bind="label2"></dab-label><decsoft-labelinput v-bind="labelInput1" v-model="labelInput1.value"></decsoft-labelinput><decsoft-labelinput v-bind="labelInput2" v-model="labelInput2.value"></decsoft-labelinput><dab-image v-bind="submit4"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const task5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "task5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "What is Lily excited about at the beginning of the project? Why does this change later?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " Created with Unregistered DecSoft App Builder",
            text: "What advice do you think Lily’s father might give her to make the information easier to understand?",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          labelInput1: {
            name: "labelInput1",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput1;
  self.event = event;

  
}

          },

          labelInput2: {
            name: "labelInput2",
            classes: "",
            event: null,
            type: "text",
            size: "sm",
            hidden: false,
            tabIndex: 0,
            title: "",
            disabled: false,
            readonly: false,
            value: "",
            label: "Type your answer",

inputHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

changeHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

focusHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

blurHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

clickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

dblclickHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

mousedownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

mouseupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

mousemoveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

mouseenterHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

mouseleaveHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

contextmenuHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

keyupHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

keydownHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

cutHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

copyHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
},

pasteHandler (event) {
    let
    view = app._getCurrentView(),
    views = app._getLoadedViews(),
    frames = app._getLoadedFrames(),
    dialogs = app._getLoadedDialogs(),
    self = views["task5"].labelInput2;
  self.event = event;

  
}

          },

          submit5: {
            name: "submit5",
            url: "images/472455594_955757506514521_8963750481230665637_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task5"].submit5;
                self.event = event;

app.showView('task51');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["task5"].image4;
                self.event = event;

app.showView('taskbot51');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="task5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-label v-bind="label1"></dab-label><dab-label v-bind="label2"></dab-label><decsoft-labelinput v-bind="labelInput1" v-model="labelInput1.value"></decsoft-labelinput><decsoft-labelinput v-bind="labelInput2" v-model="labelInput2.value"></decsoft-labelinput><dab-image v-bind="submit5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot11 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot11",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image4: {
            name: "image4",
            url: "images/473592559_601148519550062_889866932362339318_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot11"].image2;
                self.event = event;

app.showView('taskbot12');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot11"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot11"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot11" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot12 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot12",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474464072_1511321306202188_1452082286517060408_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472205107_979771870740775_2820368697562667777_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot12"].image2;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot12"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot12"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot12" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image2"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot21 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot21",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474712785_594393706891595_8648606981649014907_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot21"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot21"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot21"].image2;
                self.event = event;

app.showView('taskbot22');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot21" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot22 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot22",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474090299_964147402290073_311475185500929914_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot22"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot22"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot22"].image2;
                self.event = event;

app.showView('taskbot23');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot22" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot23 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot23",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474277225_1142661564197749_5123117919810821308_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot23"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot23"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot23"].image2;
                self.event = event;

app.showView('taskbot24');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot23" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot24 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot24",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474539449_972364030923302_958562043039189950_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot24"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot24"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472205107_979771870740775_2820368697562667777_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot24"].image2;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot24" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskQ1 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskQ1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          iframe3: {
            name: "iframe3",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://docs.google.com/forms/d/e/1FAIpQLSfdEl7PNe5iBh6TavhrytfYzbIQCqPw2uwfqvim5NDH9iD9MQ/viewform?usp=header",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474737201_1519763009006940_9111988661729388446_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ1"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ1"].image4;
                self.event = event;

app.showView('taskbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskQ1" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-iframe v-bind="iframe3"></dab-iframe><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskQ2 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskQ2",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          iframe3: {
            name: "iframe3",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://docs.google.com/forms/d/e/1FAIpQLSfdEl7PNe5iBh6TavhrytfYzbIQCqPw2uwfqvim5NDH9iD9MQ/viewform?usp=header",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474039111_514453627795265_966336220618507518_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ2"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ2"].image4;
                self.event = event;

app.showView('taskbot21');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskQ2" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-iframe v-bind="iframe3"></dab-iframe><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskQ3 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskQ3",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          iframe3: {
            name: "iframe3",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://docs.google.com/forms/d/e/1FAIpQLSfdEl7PNe5iBh6TavhrytfYzbIQCqPw2uwfqvim5NDH9iD9MQ/viewform?usp=header",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ3"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ3"].image4;
                self.event = event;

app.showView('taskbot31');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskQ3" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-iframe v-bind="iframe3"></dab-iframe><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskQ4 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskQ4",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          iframe3: {
            name: "iframe3",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://docs.google.com/forms/d/e/1FAIpQLSfdEl7PNe5iBh6TavhrytfYzbIQCqPw2uwfqvim5NDH9iD9MQ/viewform?usp=header",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ4"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ4"].image4;
                self.event = event;

app.showView('taskbot41');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskQ4" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-iframe v-bind="iframe3"></dab-iframe><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image4"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskQ5 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskQ5",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ5"].image2;
                self.event = event;

app.showView('taskbot51');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          iframe3: {
            name: "iframe3",
            title: " Created with Unregistered DecSoft App Builder",
            source: "https://docs.google.com/forms/d/e/1FAIpQLSfdEl7PNe5iBh6TavhrytfYzbIQCqPw2uwfqvim5NDH9iD9MQ/viewform?usp=header",
            classes: "",
            hidden: false,
            event: null,
            loadHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskQ5"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskQ5" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image2"></dab-image><dab-iframe v-bind="iframe3"></dab-iframe><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot31 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot31",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474085037_1783939459029588_2028450333057637848_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot31"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot31"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot31"].image2;
                self.event = event;

app.showView('taskbot32');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot31" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot32 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot32",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474328383_2416384708692897_8113683139594100662_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot32"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot32"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot32"].image2;
                self.event = event;

app.showView('taskbot33');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot32" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot33 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot33",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474032930_896726652535793_5109335655934413690_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot33"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot33"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot33"].image2;
                self.event = event;

app.showView('taskbot34');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot33" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot34 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot34",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474066611_1356626942436049_6249140777570012287_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474712668_585246377710311_2206443737340126962_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot34"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot34"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472205107_979771870740775_2820368697562667777_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot34"].image2;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot34" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot41 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot41",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474522066_1298422438060854_1943706326278233682_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot41"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot41"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot41"].image2;
                self.event = event;

app.showView('taskbot42');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot41" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot42 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot42",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/473830157_9040264419400240_7257596282803200382_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image5: {
            name: "image5",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot42"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot42"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot42"].image2;
                self.event = event;

app.showView('taskbot43');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot42" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot43 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot43",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474737497_2276881642708071_2699237729502973918_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot43"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot43"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot43"].image2;
                self.event = event;

app.showView('taskbot44');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot43" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot44 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot44",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474737322_907575204862558_6996927867184385172_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot44"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474732864_624509826741022_6139322745404491246_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot44"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472205107_979771870740775_2820368697562667777_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot44"].image2;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot44" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot51 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot51",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474715690_649968554131533_6929678023121937981_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot51"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot51"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot51"].image2;
                self.event = event;

app.showView('taskbot52');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot51" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot52 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot52",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474124513_1722647034967085_6998881086417537801_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot52"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image7: {
            name: "image7",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot52"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472359031_2266156700416672_6719885261184674651_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot52"].image2;
                self.event = event;

app.showView('taskbot53');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot52" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image7"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };

const taskbot53 = {
 components: DabComponents,
 created() {
   this.$root.views[this.name] = this;

 },
      data() {
        return {
          name: "taskbot53",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          app: this.$root,
          image1: {
            name: "image1",
            url: "images/474952621_591456130353917_6115518564765359487_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "fill",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image4: {
            name: "image4",
            url: "images/474083773_2000884590430944_1364545875684377963_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },
          image6: {
            name: "image6",
            url: "images/474138320_513538574527358_5744788303321596870_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot53"].image6;
                self.event = event;

app.showDialog('Ansbot11');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image5: {
            name: "image5",
            url: "images/474738492_965941294979918_8326998411994216454_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},
            clickHandler() {},
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image3: {
            name: "image3",
            url: "images/467489330_569942018985113_3187169807731815346_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot53"].image3;
                self.event = event;

app.showSidebar();
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          },

          image2: {
            name: "image2",
            url: "images/472205107_979771870740775_2820368697562667777_n.png",
            classes: "",
            description: "",
            title: " Created with Unregistered DecSoft App Builder",
            imageFit: "contain",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler() {},
            errorHandler() {},

            clickHandler(event) {
              let
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = views["taskbot53"].image2;
                self.event = event;

app.showView('home');
            },
            dblclickHandler() {},
            mouseupHandler() {},
            mousedownHandler() {},
            mousemoveHandler() {},
            mouseenterHandler() {},
            mouseleaveHandler() {},
            contextmenuHandler() {}
          }
        };
      },
      activated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
          app._setViewEvents(this);

      },
      deactivated() {
        let
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler(event) {
          let
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
    },
      template: `<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->
<transition v-bind:[app.viewTransitionName]="transitionName" v-bind:[app.viewTransitionMode]="transitionMode" v-bind:[app.viewInAnimation]="'animate__animated ' + 'animate__' + inAnimation" v-bind:[app.viewOutAnimation]="'animate__animated ' + 'animate__' +  outAnimation"><div title="Created with Unregistered DecSoft App Builder" id="taskbot53" v-bind:class="['app-view', classes]"><dab-sidebar v-bind="app.sidebar"></dab-sidebar><dab-image v-bind="image1"></dab-image><dab-image v-bind="image4"></dab-image><dab-image v-bind="image6"></dab-image><dab-image v-bind="image5"></dab-image><dab-image v-bind="image3"></dab-image><dab-image v-bind="image2"></dab-image></div></transition>
<!-- (Unregistered DecSoft App Builder - https://www.decsoftutils.com/) -->`
  };


const DabApp = {

  components: {
    "dab-alert": DabAlert,
    "dab-toast": DabToast,
    start,home,collaboration,coaching1,coaching2,problem1,problem2,problem3,problem4,problem5,learning1,learning2,learning3,learning4,learning5,compre1,compre2,compre3,compre4,compre5,scaf1,scaf2,scaf3,scaf4,scaf5,task1,task2,task3,task4,task5,taskbot11,taskbot12,taskbot21,taskbot22,taskbot23,taskbot24,taskQ1,taskQ2,taskQ3,taskQ4,taskQ5,taskbot31,taskbot32,taskbot33,taskbot34,taskbot41,taskbot42,taskbot43,taskbot44,taskbot51,taskbot52,taskbot53,
    dialogscafproce,dialogscafstretegic,dialogscafmeta,dialogconcep1,dialogconcep2,dialogconcep3,dialogconcep4,dialogconcep5,dialoghandout1,dialoghandout2,dialoghandout3,dialoghandout4,dialoghandout5,dialogtask1,dialogtask2,dialogtask3,dialogtask4,Ansbot11,Ansbot12,dialogtask5
  },

  created() {

    window.app = this;
    window.store = {};
    this._setupAppHtml();
    this._setupAppEvents();
    this._setupAppVariables();
    this._setupAppPlugins();
    this._setupCordovaPlugins();
    
  },

  mounted() {
    
  },

  data() {

    return {
      store: {},
      views: [],
      event: null,
      error: null,
      
      id: "com.decsoft.appbuilder",
      version: "1.0.0",
      name: "New App 2",
      shortName: "New App 2",
      description: "Another DecSoft App Builder app",
      authorName: "DecSoft App Builder",
      authorEmail: "DecSoft App Builder",
      authorUrl: "https://www.decsoftutils.com/",
      language: "en",
      languageName: "English",
      textDirection: "ltr",
      style: "scaled",
      buildNumber: 0,
      lastSound: null,
      activeDialog: null,
      defaultLanguage: "en",
      theme: "default",
      themes: ["default"],
      sidebar: {
        item: {
          index: -1,
          subindex: -1
        },
        header: "",
        direction: "left",
        headerKind: "none",
        headerAlign: "left",
        imageUrl: "",
        items: [
  {
    "text": "Problem base",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-clipboard-question",
    "actived": false,
    "disabled": false,
    "items": []
  },
  {
    "text": "Learning Resouces",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-book-open",
    "actived": false,
    "disabled": false,
    "items": [
  {
    "text": "Reading for Main Idea",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-1",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Scanning",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-2",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Fact and Opinion",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-3",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Supporting Sentence",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-4",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Skimming",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-5",
    "actived": false,
    "disabled": false
  }
]
  },
  {
    "text": "Reading Comprehension Center",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-dice-d6",
    "actived": false,
    "disabled": false,
    "items": [
  {
    "text": "Reading for Main Idea",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-1",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Scanning",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-2",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Fact and Opinion",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-3",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Supporting Sentence",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-4",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Skimming",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-5",
    "actived": false,
    "disabled": false
  }
]
  },
  {
    "text": "Scaffolding",
    "kind": "none",
    "class": "",
    "icon": "fa-regular fa-handshake",
    "actived": false,
    "disabled": false,
    "items": [
  {
    "text": "Reading for Main Idea",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-1",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Scanning",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-2",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Fact and Opinion",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-3",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Identifying Supporting Sentence",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-4",
    "actived": false,
    "disabled": false
  },
  {
    "text": "Skimming",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-5",
    "actived": false,
    "disabled": false
  }
]
  },
  {
    "text": "Coaching",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-person-chalkboard",
    "actived": false,
    "disabled": false,
    "items": []
  },
  {
    "text": "Collaboration",
    "kind": "none",
    "class": "",
    "icon": "fa-solid fa-people-group",
    "actived": false,
    "disabled": false,
    "items": []
  }
],
        itemClickHandler: this._appEventOnSidebarItemClick,
        headerClickHandler: this._appEventOnSidebarHeaderClick
      },
    };
  },

  computed: {

    viewTransitionName() {

      return this._getCurrentView().transitionName !== '' ? 'name' : null;
    },

    viewTransitionMode() {

      return this._getCurrentView().transitionMode !== '' ? 'mode' : null;
    },

    viewInAnimation() {

      return this._getCurrentView().inAnimation !== '' ? 'enter-active-class' : null;
    },

    viewOutAnimation() {

      return this._getCurrentView().outAnimation !== '' ? 'leave-active-class' : null;
    }
  },

  methods: {

    // Public app variables related methods

    // Replaced by setReactiveVar()
    setVar(name, value) {

      this.store[name] = value;
    },

    setReactiveVar(name, value) {

      this.store[name] = value;
    },

    getReactiveVar(name, defaultValue) {

      if (typeof this.store[name] !== 'undefined') {

        return this.store[name];
      }

      return defaultValue;
    },

    unsetReactiveVar(name) {

      if (typeof this.store[name] !== 'undefined') {

        delete this.store[name];
      }
    },

    setNonReactiveVar(name, value) {

      window.store[name] = value;
    },

    getNonReactiveVar(name, defaultValue) {

      if (typeof window.store[name] !== 'undefined') {

        return window.store[name];
      }

      return defaultValue;
    },

    unsetNonReactiveVar(name) {

      if (typeof window.store[name] !== 'undefined') {

        delete window.store[name];
      }
    },

    // Public app views related methods

    showView(viewName) {

      this.$router.push(viewName);
    },

    replaceView(viewName) {

      this.$router.replace(viewName);
    },

    // Public app dialogs related methods

    showDialog(dialogName, shownCallback, hiddenCallback) {

      let modalEl = document.getElementById(dialogName);
      let modal = new bootstrap.Modal(modalEl, { keyboard: false, backdrop: 'static' });
      modal.show();

      if (typeof shownCallback === 'function') {
        modalEl.addEventListener('shown.bs.modal', shownCallback, { once: true });
      }
      if (typeof hiddenCallback === 'function') {
        modalEl.addEventListener('hidden.bs.modal', hiddenCallback, { once: true });
      }
    },

    hideDialog(dialogName) {

      let elem = window.document.querySelector(`#${dialogName}.app-dialog.modal.show`);
      if (elem !== null) {
        let dialog = bootstrap.Modal.getInstance(elem);
        if (dialog !== null) {
          dialog.hide();
        }
      }
    },

    hideDialogs() {

      let dialogs = window.document.querySelectorAll('.app-dialog.modal.show');
      for (let i = 0; i < dialogs.length; i++) {
        let dialog = bootstrap.Modal.getInstance(dialogs[i]);
        if (dialog !== null) {
          dialog.hide();
        }
      }
    },

    getVisibleDialogs() {

      let dialogs = [];
      window.document.querySelectorAll('.app-dialog.modal.show').forEach(function (el) {
        dialogs.push(el.id);
      });
      return dialogs;
    },

    isDialogVisible(dialogName) {

      return window.document.querySelector(`#${dialogName}.app-dialog.modal.show`) !== null;
    },

    // Public app alert related methods

    showAlert(body = '', title = '', kind = '', buttons = [], closeCallback = () => {}) {

      let alert = this.$refs.DabAlert;

      alert.body = body;
      alert.title = title;
      alert.kind = kind;
      alert.buttons = buttons;
      alert.closeCallback = closeCallback;

      let modal = new bootstrap.Modal(window.document.getElementById('dab-alert-modal'), { keyboard: false, backdrop: 'static' });
      let elem = window.document.getElementById('dab-alert-modal');

      elem.addEventListener('hidePrevented.bs.modal', () => {
        if (!alert.buttons || alert.buttons.length === 0) {
          modal.hide();
        }
      }, { once: true });

      modal.show();
    },

    hideAlert() {

      let elem = window.document.querySelector('#dab-alert-modal.modal.show');
      if (elem !== null) {
        let modal = bootstrap.Modal.getInstance(elem);
        if (modal !== null) {
          modal.hide();
        }
      }
    },

    // Public app sidebar related methods

    showSidebar() {

      $('#dab-sidebar').addClass('active');
      $('#dab-sidebar-overlay').addClass('active');
    },

    hideSidebar() {

      $('#dab-sidebar').removeClass('active');
      $('#dab-sidebar-overlay').removeClass('active');
    },

    sidebarIsVisible() {

      return $('#dab-sidebar').hasClass('active');
    },

    sidebarSetDirection(direction) {

      if (this.sidebar.direction === direction) {
        return this.sidebar.direction;
      }
      this.sidebar.direction = direction;
      if (direction === 'right') {
        let
          css = '#dab-sidebar { left: initial; right: -280px; } #dab-sidebar.active { left: initial; right: 0; }',
          style = document.createElement('style');
        document.head.appendChild(style);
        style.id = 'sidebar-stylesheet';
        style.appendChild(document.createTextNode(css));
      } else {
        if ($('#sidebar-stylesheet').length > 0) {
          $('#sidebar-stylesheet').remove();
        }
      }
      return this.sidebar.direction;
    },

    // Public app toasts related methods

    showToast(text = '', hideMsecs = false, kind = 'light', title = '', subtitle = '', clickCallback = () => {}, dismissCallback = () => {}, payload = null) {

      let
        toastId = this.randomStr(),
        toasts = this._getToastsComponent();

      toasts.toasts.push({
        "text": text,
        "id": toastId,
        "title": title,
        "kind": kind,
        "payload": payload,
        "subtitle": subtitle,
        "clickCallback": clickCallback,
        "dismissCallback": dismissCallback
      });

      if (hideMsecs) {
        window.setTimeout(() => {
          for (let i in toasts.toasts) {
            if (toasts.toasts[i].id === toastId) {
              toasts.toasts.splice(i, 1);
            }
          }
        }, hideMsecs);
      }
      return toastId;
    },

    hideToast(toastId) {

      let toasts = this._getToastsComponent();
      for (let i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          toasts.toasts.splice(i, 1);
        }
      }
    },

    hideToasts() {

      let toasts = this._getToastsComponent();
      toasts.toasts = [];
    },

    getToast(toastId) {

      let toasts = this._getToastsComponent();
      for (let i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          return toasts.toasts[i];
        }
      }
      return null;
    },

    getToasts() {

      let toasts = this._getToastsComponent();
      return toasts.toasts;
    },

    // Public app local storage related methods

    setOption(key, value) {

      return localStorage.setItem(key, value);
    },

    getOption(key, defaultValue) {

      return localStorage.getItem(key) !== null ?
        localStorage.getItem(key) : defaultValue;
    },

    removeOption(key) {

      return localStorage.removeItem(key);
    },

    clearOptions() {

      return localStorage.clear();
    },

    // Public app controls related methods

    focusControl(controlName) {

      $('#' + controlName).focus();
    },

    // Public app themes related methods

    setAppTheme(themeName) {

      let lowerThemeName = themeName.toLowerCase();

      if (this.themes.indexOf(lowerThemeName) === -1) {
        return false;
      }

      $('body').removeClass(this.theme);
      this.theme = lowerThemeName;

      let dirSuffix = this.textDirection.toLowerCase() === 'rtl' ? '.rtl' : '';
      $('#app-theme').attr('href', `app/styles/${lowerThemeName}${dirSuffix}.css`);

      $('body').addClass(this.theme);
      return this.theme;
    },

	  getAppThemeColor() {

      return $('html').attr('data-bs-theme');
	  },

	  setAppThemeColor(colorMode) {

      if (colorMode === 'light' || colorMode === 'dark') {
        $('html').attr('data-bs-theme', colorMode);
      }
	  },

    setAppFixedStyle() {

      this.style = 'fixed';
      $('#app-style').attr('href', 'app/styles/fixed.css');
    },

    setAppScaledStyle() {

      this.style = 'scaled';
      $('#app-style').attr('href', 'app/styles/scaled.css');
    },

    setAppTextDirection(textDirection) {

      let html = document.getElementsByTagName('html')[0];
      this.textDirection = textDirection;
      html.setAttribute('dir', textDirection);
      this.setAppTheme(this.theme);
    },

    getAppColorScheme() {

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    // Public app device related methods

    setViewReadyForDeviceKeyboard() {

      let self = this;

      document.addEventListener('deviceready', () => {
        $('#' + self._getCurrentView().name).css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });
      });
    },

    setDialogReadyForDeviceKeyboard() {

      let self = this;

      document.addEventListener('deviceready', () => {
        $('#' + self._getCurrentView().name + ' .modal-dialog').css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });
      });
    },

    // Public app strings related methods

    strLen(text) {

      return text.length;
    },

    trimStr(text) {

      return text.trim();
    },

    lowerCase(text) {

      return text.toLowerCase();
    },

    upperCase(text) {

      return text.toUpperCase();
    },

    strSearch(text, query) {

      return text.search(query);
    },

    subStr(text, start, count) {

      return text.substr(start, count);
    },

    strReplace(text, from, to) {

      return text.replace(from, to);
    },

    strReplaceAll(text, from, to) {

      return text.split(from).join(to);
    },

    splitStr(text, separator, limit) {

      return text.split(separator, limit);
    },

    strToBase64(text) {

      return window.Base64.encode(text);
    },

    base64ToStr(text) {

      return window.Base64.decode(text);
    },

    serialize(value) {

      return JSON.stringify(value);
    },

    unserialize(text) {

      return JSON.parse(text);
    },

    randomStr(length = 10) {

      let
        result = '',
        charsMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        mapLength = charsMap.length;

      for (let i = 0; i < length; i++) {
        result += charsMap.charAt(Math.floor(Math.random() * mapLength));
      }

      return result;
    },

    formatStr (str) {

      let args = Array.prototype.slice.call(arguments, 1);

      return str.replace(/{(\d+)}/g, function(match, number) {

        return typeof args[number] !== 'undefined'
          ? args[number]
          : match
        ;
      });
    },

    // Public app numbers related methods

    randomNum(maxNum) {

      maxNum = maxNum || 100;
      return Math.floor(Math.random() * maxNum);
    },


    // Public app sound related methods

    beep() {

      this.playSound(
        'app/audios/beep/beep.mp3',
        'app/audios/beep/beep.ogg'
      );
    },

    playSound(mp3Url, oggUrl) {

      if (this.lastSound === null) {
        this.lastSound = new Audio();
      }

      if (this.lastSound.canPlayType('audio/ogg') !== '') {
        this.lastSound.src = oggUrl;
        this.lastSound.type = 'audio/ogg';
      } else {
        this.lastSound.src = mp3Url;
        this.lastSound.type = 'audio/mpeg';
      }

      this.lastSound.play();
      return this.lastSound;
    },

    stopSound() {

      this.lastSound.pause();
      this.lastSound.currentTime = 0;
    },

    // Public app resources related methods

    resource(name) {

      if (!appLangs[this.language]) {
        return appLangs[this.defaultLanguage].resources[name];
      } else {
        return appLangs[this.language]['resources'][name] !== undefined ?
          appLangs[this.language]['resources'][name] :
          appLangs[this.defaultLanguage].resources[name];
      }
    },

    // Public app languages related methods

    translateView() {

      return this._translateView();
    },

    getLanguages() {

      let result = [];
      for (let i in appLangs) {
        result.push({ code: i, name: appLangs[i].language.name });
      }
      return result;
    },

    getLanguagesNames() {

      let result = [];
      for (let i in appLangs) {
        result.push(appLangs[i].language.name);
      }
      return result;
    },

    getLanguagesCodes() {

      let result = [];
      for (let i in appLangs) {
        result.push(i);
      }
      return result;
    },

    getLanguageCodeFromName(name) {

      let result = '';
      for (var i in appLangs) {
        if (appLangs[i].language.name === name) {
          result = i;
          break;
        }
      }
      return result;
    },

    getLanguageNameFromCode(code) {

      let result = '';
      for (let i in appLangs) {
        if (i === code) {
          result = appLangs[i].language.name;
          break;
        }
      }
      return result;
    },

    

    // Internal / Private app methods

    _appEventOnResize(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMessage(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnContextMenu(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnColorSchemeChange(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;

      
    },

    _appEventOnOnline(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOffline(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDomReady() {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      
    },

    _appEventOnBatteryStatus(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryLow(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryCritical(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnDeviceReady(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;

      window.addEventListener('online', self._appEventOnOnline);
      window.addEventListener('offline', self._appEventOnOffline);
      window.addEventListener('batterylow', self._appEventOnBatteryLow);
      window.addEventListener('batterystatus', self._appEventOnBatteryStatus);
      window.addEventListener('batterycritical', self._appEventOnBatteryCritical);
      window.addEventListener('orientationchange', self._appEventOnOrientationChange);
      document.addEventListener('pause', self._appEventOnPause);
      document.addEventListener('resume', self._appEventOnResume);
      
      
      
      
    },

    _appEventOnPause(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnResume(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnBackButton(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOrientationChange(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeUpButton(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeDownButton(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnClick(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDblClick(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeRight(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeLeft(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyUp(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyDown(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseUp(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseDown(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseMove(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnRenderError(error, instance, info) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      self.error = { "error": error, "instance": instance, "info": info };

      
      self.error = null;
    },

    _appEventOnJavascriptError(errorMsg, url, lineNumber) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = null;
      self.error = { "message": errorMsg, "url": url, "lineNumber": lineNumber };

      window.console.info(self.error.message, self.error.url, self.error.lineNumber);

      self.error = null;
    },

    _appEventViewChange(to, from) {

      if (to.name === from.name) {
        return;
      }

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();

      self.event = {
        "nextViewName": to.name,
        "prevViewName": from.name
      };

      
    },

    _appEventOnSidebarItemClick(event, item, index, subindex) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      self.sidebar.item = item;
      self.sidebar.item.index = index;
      self.sidebar.item.subindex = subindex;
      if(app.sidebar.item.index==0){
  app.showView('home');
}else if(app.sidebar.item.index==1 && app.sidebar.item.subindex==0){
  app.showView('learning1');
}else if(app.sidebar.item.index==1 && app.sidebar.item.subindex==1){
  app.showView('learning2');
}else if(app.sidebar.item.index==1 && app.sidebar.item.subindex==2){
  app.showView('learning3');
}else if(app.sidebar.item.index==1 && app.sidebar.item.subindex==3){
  app.showView('learning4');
}else if(app.sidebar.item.index==1 && app.sidebar.item.subindex==4){
  app.showView('learning5');
}else if(app.sidebar.item.index==2 && app.sidebar.item.subindex==0){
  app.showView('compre1');
}else if(app.sidebar.item.index==2 && app.sidebar.item.subindex==1){
  app.showView('compre2');
}else if(app.sidebar.item.index==2 && app.sidebar.item.subindex==2){
  app.showView('compre3');
}else if(app.sidebar.item.index==2 && app.sidebar.item.subindex==3){
  app.showView('compre4');
}else if(app.sidebar.item.index==2 && app.sidebar.item.subindex==4){
  app.showView('compre5');
}else if(app.sidebar.item.index==3 && app.sidebar.item.subindex==0){
  app.showView('scaf1');
}else if(app.sidebar.item.index==3 && app.sidebar.item.subindex==1){
  app.showView('scaf2');
}else if(app.sidebar.item.index==3 && app.sidebar.item.subindex==2){
  app.showView('scaf3');
}else if(app.sidebar.item.index==3 && app.sidebar.item.subindex==3){
  app.showView('scaf4');
}else if(app.sidebar.item.index==3 && app.sidebar.item.subindex==4){
  app.showView('scaf5');
}else if(app.sidebar.item.index==4) {
  app.showView('coaching2');
}else if(app.sidebar.item.index==5) {
  app.showView('collaboration');
}
app.hideSidebar();
    },

    _appEventOnSidebarHeaderClick(event) {

      let
        self = this,
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
      self.event = event;
      
    },

    _setupAppEvents() {

      this._setupAppErrorsEvents();
      this._setupAppWindowEvents();
      this._setupAppDocumentEvents();
      this._setupAppHammerEvents();
      this._setupAppDeviceEvents();
      this._setupAppRouterEvents();
    },

    _setupAppErrorsEvents() {

      appInstance.config.errorHandler = this._appEventOnRenderError;
      window.addEventListener('error', this._appEventOnJavascriptError);
    },

    _setupAppWindowEvents() {

      window.addEventListener('resize', this._appEventOnResize);
      window.addEventListener('message', this._appEventOnMessage);
      window.addEventListener('contextmenu', this._appEventOnContextMenu);
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this._appEventOnColorSchemeChange);
    },

    _setupAppDocumentEvents() {

      let self = this;
      $(self._appEventOnDomReady);
      document.addEventListener('click', this._appEventOnClick);
      document.addEventListener('dblclick', this._appEventOnDblClick);
      document.addEventListener('keyup', this._appEventOnKeyUp);
      document.addEventListener('keydown', this._appEventOnKeyDown);
      document.addEventListener('mouseup', this._appEventOnMouseUp);
      document.addEventListener('mousedown', this._appEventOnMouseDown);
      document.addEventListener('mousemove', this._appEventOnMouseMove);
    },

    _setupAppHammerEvents() {

      let ha = new Hammer(document.body);
      ha.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      ha.on('swiperight', this._appEventSwipeRight);
      ha.on('swipeleft', this._appEventSwipeLeft);
    },

    _setupAppDeviceEvents() {

      document.addEventListener('deviceready', this._appEventOnDeviceReady);
    },

    _setupAppRouterEvents() {

      this.$router.beforeEach((to, from) => {
        if (from.name === undefined) {
          // The first time the app is running
          return true;
        }
        return this._appEventViewChange(to, from);
      });
    },

    _getCurrentView() {

      if (this.activeDialog !== null) {
        return this.activeDialog;
      }

      for (let view in this.views) {
        if (this.$router.currentRoute.value.name === view) {
          return this.views[view];
        }
      }
      return null;
    },

    _getLoadedViews() {

      return this.views;
    },

    _getLoadedFrames() {

      return {
        
      };
    },

    _getLoadedDialogs() {

      return this.$refs;
    },

    _getActiveDialog() {

      this.activeDialog = null;

      let
        activeModals = $($('.modal.show').get().reverse());

      if (activeModals.length > 0) {

        for (let i = 0; i < this.$refs.length; i++) {
          if (this.$ref[i].$el.id === $($('.modal.show').get().reverse())[0].id) {
            this.activeDialog = this.$refs[i];
            break;
          }
        }
      }

      return this.activeDialog;
    },

    _getToastsComponent() {

      for (let i in this.$refs) {
        if (this.$refs[i].$el.id === 'dab-toasts-wrapper') {
          return this.$refs[i];
        }
      }
      return null;
    },

    _transformHttpRequest(http) {

      if (http.contentType === 'application/json') {

        return JSON.stringify(http.data);

      } else if (http.contentType === 'application/x-www-form-urlencoded') {

        let result = [];
        for (let key in http.data) {
          result.push(encodeURIComponent(key) + '=' + encodeURIComponent(http.data[key]));
        }

        return result.join('&');

      } else if (http.contentType === false || http.contentType === 'multipart/form-data') {

        let result = new FormData();
        for (let key in http.data) {
          result.append(key, http.data[key]);
        }

        return result;

      } else {

        return http.data;
      }
    },

    _translateFrames() {

      let frames = this._getLoadedFrames();
      for (let frame in frames) {
        for (let control in frames[frame]) {
          for (let property in frames[frame][control]) {
            let origProp = property + '_default';
            if (this.language === this.defaultLanguage) {
              if (frames[frame][control][origProp] !== undefined) {
                frames[frame][control][property] = frames[frame][control][origProp];
              }
              continue;
            }
            if (appLangs[this.language] && appLangs[this.language]['frames'] &&
              appLangs[this.language]['frames'][frame] && appLangs[this.language]['frames'][frame][control] &&
              appLangs[this.language]['frames'][frame][control][property]) {
               if (frames[frame][control][origProp] === undefined) {
                 frames[frame][control][origProp] = frames[frame][control][property];
               }
               frames[frame][control][property] = appLangs[this.language]['frames'][frame][control][property];
            }
          }
        }
      }
    },

    _translateSidebar() {

      if (appLangs[this.language] && appLangs[this.language].sidebar) {
        if (appLangs[this.language].sidebar['header'] !== undefined) {
          this.sidebar.header = appLangs[this.language].sidebar.header;
        }
        if (appLangs[this.language].sidebar['imageUrl'] !== undefined) {
          this.sidebar.imageUrl = appLangs[this.language].sidebar.imageUrl;
        }
        if (appLangs[this.language].sidebar['items'] !== undefined) {
          this.sidebar.items = appLangs[this.language].sidebar.items;
        }
      }
    },

    _translateView() {

      $('html').attr('lang', this.language);

      let view = this._getCurrentView();

      this._translateFrames();
      this._translateSidebar();

      for (let control in view.$data) {

        for (let property in view[control]) {
          let
            origProp = property + '_default';
          if (this.language === this.defaultLanguage) {
            if (view[control][origProp] !== undefined) {
              view[control][property] = view[control][origProp];
            }
            continue;
          }
          if (appLangs[this.language] && appLangs[this.language]['views'] &&
            appLangs[this.language]['views'][view.name] && appLangs[this.language]['views'][view.name][control] &&
            appLangs[this.language]['views'][view.name][control][property]) {
            if (view[control][origProp] === undefined) {
              view[control][origProp] = view[control][property];
            }
            view[control][property] = appLangs[this.language]['views'][view.name][control][property];
          }
        }
      }
    },

    _setViewEvents(view) {

      if (view._with_event_listeners) {
        return true;
      }

      let
        el = document.getElementById(view.name),
        ha = new Hammer(el);
      el.addEventListener('click', view.clickHandler);
      el.addEventListener('dblclick', view.dblclickHandler);
      el.addEventListener('mouseup', view.mouseupHandler);
      el.addEventListener('mousedown', view.mousedownHandler);
      el.addEventListener('mousemove', view.mousemoveHandler);
      el.addEventListener('mouseenter', view.mouseenterHandler);
      el.addEventListener('mouseleave', view.mouseleaveHandler);
      el.addEventListener('contextmenu', view.contextmenuHandler);
      ha.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      ha.on('swiperight', view.swipeRightHandler);
      ha.on('swipeleft', view.swipeLeftHandler);
      view._with_event_listeners = true;
    },

    _setupAppHtml() {

      let
        html = document.getElementsByTagName('html')[0],
        body = document.getElementsByTagName('body')[0],
        title = document.getElementsByTagName('title')[0];
      title.innerText = this.name;
      body.classList.add(this.theme);
      html.setAttribute('dir', this.textDirection);
      html.setAttribute('lang', this.language);
    },

    _setupAppVariables() {

      this.query = false;
      this.navbarStyle = { dark: 'dark', light: 'light' };
      this.size = { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' };
      this.align = { left: "left", center: "center", right: "right" };
      this.themeColor = { dark: 'dark', light: 'light' };
      this.dropdownItem = { item: 'item', header: 'header', divider: 'divider' };
      this.dropdownDir = { up: 'dropup', down: 'dropdown', right: 'dropright' };
      this.dropdownAutoClose = {"true": 'true', inside: 'inside', outside: 'outside', "false": 'false'};
      this.httpMethod = { get: 'GET', post: 'POST', put: 'PUT', head: 'HEAD', "delete": 'DELETE' };
      this.navbarPos = { fixedTop: 'fixed-top', fixedBottom: 'fixed-bottom', stickyTop: 'sticky-top' };
      this.imageFit = { fill: 'fill', none: 'none', cover: 'cover', contain: 'contain', scale: 'scale' };
      this.kind = { link: 'link', dark: 'dark', info: 'info', light: 'light', danger: 'danger', primary: 'primary', warning: 'warning', success: 'success', secondary: 'secondary' };
      this.dialogFullscreen = { all: 'fullscreen', none: 'none', sm: 'fullscreen-sm-down', md: 'fullscreen-md-down', lg: 'fullscreen-lg-down', xl: 'fullscreen-xl-down', xxl: 'fullscreen-xxl-down' };
      this.inAnimation = { bounceIn: 'bounceIn', bounceInDown: 'bounceInDown', bounceInLeft: 'bounceInLeft', bounceInRight: 'bounceInRight', bounceInUp: 'bounceInUp', fadeIn: 'fadeIn', fadeInDown: 'fadeInDown', fadeInDownBig: 'fadeInDownBig', fadeInLeft: 'fadeInLeft', fadeInLeftBig: 'fadeInLeftBig', fadeInRight: 'fadeInRight', fadeInRightBig: 'fadeInRightBig', fadeInUp: 'fadeInUp', fadeInUpBig: 'fadeInUpBig', fadeInTopLeft: 'fadeInTopLeft', fadeInTopRight: 'fadeInTopRight', fadeInBottomLeft: 'fadeInBottomLeft', fadeInBottomRight: 'fadeInBottomRight', flipInX: 'flipInX', flipInY: 'flipInY', lightSpeedIn: 'lightSpeedIn', lightSpeedInRight: 'lightSpeedInRight', lightSpeedInLeft: 'lightSpeedInLeft', rollIn: 'rollIn', rotateIn: 'rotateIn', rotateInDownLeft: 'rotateInDownLeft', rotateInDownRight: 'rotateInDownRight', rotateInUpLeft: 'rotateInUpLeft', rotateInUpRight: 'rotateInUpRight', zoomIn: 'zoomIn', zoomInDown: 'zoomInDown', zoomInLeft: 'zoomInLeft', zoomInRight: 'zoomInRight', zoomInUp: 'zoomInUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello' };
      this.outAnimation = { bounceOut: 'bounceOut', bounceOutDown: 'bounceOutDown', bounceOutLeft: 'bounceOutLeft', bounceOutRight: 'bounceOutRight', bounceOutUp: 'bounceOutUp', fadeOut: 'fadeOut', fadeOutDown: 'fadeOutDown', fadeOutDownBig: 'fadeOutDownBig', fadeOutLeft: 'fadeOutLeft', fadeOutLeftBig: 'fadeOutLeftBig', fadeOutRight: 'fadeOutRight', fadeOutRightBig: 'fadeOutRightBig', fadeOutUp: 'fadeOutUp', fadeOutUpBig: 'fadeOutUpBig', fadeOutTopLeft: 'fadeOutTopLeft', fadeOutTopRight: 'fadeOutTopRight', fadeOutBottomRight: 'fadeOutBottomRight', fadeOutBottomLeft: 'fadeOutBottomLeft', flipOutX: 'flipOutX', flipOutY: 'flipOutY', lightSpeedOut: 'lightSpeedOut', lightSpeedOutRight: 'lightSpeedOutRight', lightSpeedOutLeft: 'lightSpeedOutLeft', rollOut: 'rollOut', rotateOut: 'rotateOut', rotateOutDownLeft: 'rotateOutDownLeft', rotateOutDownRight: 'rotateOutDownRight', rotateOutUpLeft: 'rotateOutUpLeft', rotateOutUpRight: 'rotateOutUpRight', slideOutUp: 'slideOutUp', slideOutDown: 'slideOutDown', slideOutLeft: 'slideOutLeft', slideOutRight: 'slideOutRight', zoomOut: 'zoomOut', zoomOutDown: 'zoomOutDown', zoomOutLeft: 'zoomOutLeft', zoomOutRight: 'zoomOutRight', zoomOutUp: 'zoomOutUp', backOutDown: 'backOutDown', backOutLeft: 'backOutLeft', backOutRight: 'backOutRight', backOutUp: 'backOutUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello', hinge: 'hinge' };
    },

    _setupAppPlugins() {

      this.plugins = {};
      
    },

    _setupCordovaPlugins() {

      this.cordova = {};
      
    }
  }
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    
    { path: '/', redirect: '/start' },
    { path: '/:pathMatch(.*)*', redirect: '/start' },
    { path: '/start', component: start, name: 'start', start, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/home', component: home, name: 'home', home, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/collaboration', component: collaboration, name: 'collaboration', collaboration, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/coaching1', component: coaching1, name: 'coaching1', coaching1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/coaching2', component: coaching2, name: 'coaching2', coaching2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/problem1', component: problem1, name: 'problem1', problem1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/problem2', component: problem2, name: 'problem2', problem2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/problem3', component: problem3, name: 'problem3', problem3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/problem4', component: problem4, name: 'problem4', problem4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/problem5', component: problem5, name: 'problem5', problem5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/learning1', component: learning1, name: 'learning1', learning1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/learning2', component: learning2, name: 'learning2', learning2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/learning3', component: learning3, name: 'learning3', learning3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/learning4', component: learning4, name: 'learning4', learning4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/learning5', component: learning5, name: 'learning5', learning5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/compre1', component: compre1, name: 'compre1', compre1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/compre2', component: compre2, name: 'compre2', compre2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/compre3', component: compre3, name: 'compre3', compre3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/compre4', component: compre4, name: 'compre4', compre4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/compre5', component: compre5, name: 'compre5', compre5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/scaf1', component: scaf1, name: 'scaf1', scaf1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/scaf2', component: scaf2, name: 'scaf2', scaf2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/scaf3', component: scaf3, name: 'scaf3', scaf3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/scaf4', component: scaf4, name: 'scaf4', scaf4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/scaf5', component: scaf5, name: 'scaf5', scaf5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/task1', component: task1, name: 'task1', task1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/task2', component: task2, name: 'task2', task2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/task3', component: task3, name: 'task3', task3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/task4', component: task4, name: 'task4', task4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/task5', component: task5, name: 'task5', task5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot11', component: taskbot11, name: 'taskbot11', taskbot11, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot12', component: taskbot12, name: 'taskbot12', taskbot12, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot21', component: taskbot21, name: 'taskbot21', taskbot21, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot22', component: taskbot22, name: 'taskbot22', taskbot22, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot23', component: taskbot23, name: 'taskbot23', taskbot23, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot24', component: taskbot24, name: 'taskbot24', taskbot24, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskQ1', component: taskQ1, name: 'taskQ1', taskQ1, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskQ2', component: taskQ2, name: 'taskQ2', taskQ2, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskQ3', component: taskQ3, name: 'taskQ3', taskQ3, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskQ4', component: taskQ4, name: 'taskQ4', taskQ4, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskQ5', component: taskQ5, name: 'taskQ5', taskQ5, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot31', component: taskbot31, name: 'taskbot31', taskbot31, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot32', component: taskbot32, name: 'taskbot32', taskbot32, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot33', component: taskbot33, name: 'taskbot33', taskbot33, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot34', component: taskbot34, name: 'taskbot34', taskbot34, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot41', component: taskbot41, name: 'taskbot41', taskbot41, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot42', component: taskbot42, name: 'taskbot42', taskbot42, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot43', component: taskbot43, name: 'taskbot43', taskbot43, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot44', component: taskbot44, name: 'taskbot44', taskbot44, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot51', component: taskbot51, name: 'taskbot51', taskbot51, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot52', component: taskbot52, name: 'taskbot52', taskbot52, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/taskbot53', component: taskbot53, name: 'taskbot53', taskbot53, props(route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } }
  ]
});

const pinia = Pinia.createPinia();

const appInstance = Vue.createApp(DabApp).use(pinia).use(router);

appInstance.mount('#app');
