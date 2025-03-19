import { Button$PressEvent } from "sap/m/Button";
import UIComponent from "sap/ui/core/UIComponent";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Container from "sap/ushell/Container";
import Extension from "sap/ushell/services/Extension";

/**
 * @namespace de.kernich.fiori.fullscreen
 */
export default class Component extends UIComponent {
    static metadata = {
        manifest: "json",
    };

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    public init(): void {
        // call the base component's init function
        super.init();
        void this.handleInit();
    }

    private async handleInit() {
        const resourceModel = new ResourceModel({
            bundleName: "de.kernich.fiori.fullscreen.messagebundle",
            async: true,
        });
        const resourceBundle = await resourceModel.getResourceBundle();
        resourceBundle.getText("btnText");

        const extension = (await Container.getServiceAsync(
            "Extension"
        )) as unknown as Extension;
        const item = await extension.createHeaderItem({
            icon: document.fullscreenElement
                ? "sap-icon://exit-full-screen"
                : "sap-icon://full-screen",
            text: document.fullscreenElement
                ? resourceBundle.getText("btnExitFullscreen")
                : resourceBundle.getText("btnEnterFullscreen"),
            press: (event: Button$PressEvent) => {
                if (!document.fullscreenElement) {
                    void document.body.requestFullscreen();
                    event
                        .getSource()
                        .setText(resourceBundle.getText("btnExitFullscreen"));
                    event.getSource().setIcon("sap-icon://exit-full-screen");
                } else {
                    void document.exitFullscreen();
                    event
                        .getSource()
                        .setText(resourceBundle.getText("btnEnterFullscreen"));
                    event.getSource().setIcon("sap-icon://full-screen");
                }
            },
        });
        item.showForAllApps();
    }
}
