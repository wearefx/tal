
define(
    'antie/widgets/hoverablebutton',
    [
        'antie/widgets/button'
    ],
    function(Button) {
        'use strict';

        return Button.extend({
            /**
             * Renders the widget and any child widgets to device-specific output.
             * @param {antie.devices.Device} device The device to render to.
             * @returns A device-specific object that represents the widget as displayed on the device (in a browser, a DOMElement);
             */
            render: function render (device) {
                this.addClass('hoverableButton');

                var self = this;
                this.outputElement = device.createButton(this.id, this.getClasses(), '#');
                for(var i=0; i<this._childWidgetOrder.length; i++) {
                    device.appendChildElement(this.outputElement, this._childWidgetOrder[i].render(device));
                }
                this.outputElement.onmouseover = function () {
                    self.focus(true);
                };
                this.outputElement.onclick = function () {
                    if (self.isFocussed()) {
                        self.select();
                    }
                };
                return this.outputElement;
            },
        });
    }
)
