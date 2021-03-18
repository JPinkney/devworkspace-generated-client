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
* Volume that should be mounted to a component container
*/
export class V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerVolumeMounts {
    /**
    * The volume mount name is the name of an existing `Volume` component. If several containers mount the same volume name then they will reuse the same volume and will be able to access to the same files.
    */
    'name': string;
    /**
    * The path in the component container where the volume should be mounted. If not path is mentioned, default path is the is `/<name>`.
    */
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerVolumeMounts.attributeTypeMap;
    }
}

