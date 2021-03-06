/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: master
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Bindings of commands to events. Each command is referred-to by its name.
*/
export class V1alpha1DevWorkspaceSpecTemplateEvents {
    /**
    * Names of commands that should be executed after the workspace is completely started. In the case of Che-Theia, these commands should be executed after all plugins and extensions have started, including project cloning. This means that those commands are not triggered until the user opens the IDE in his browser.
    */
    'postStart'?: Array<string>;
    /**
    * Names of commands that should be executed after stopping the workspace.
    */
    'postStop'?: Array<string>;
    /**
    * Names of commands that should be executed before the workspace start. Kubernetes-wise, these commands would typically be executed in init containers of the workspace POD.
    */
    'preStart'?: Array<string>;
    /**
    * Names of commands that should be executed before stopping the workspace.
    */
    'preStop'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "Array<string>"
        },
        {
            "name": "postStop",
            "baseName": "postStop",
            "type": "Array<string>"
        },
        {
            "name": "preStart",
            "baseName": "preStart",
            "type": "Array<string>"
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateEvents.attributeTypeMap;
    }
}

