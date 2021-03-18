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

import { V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshiftEndpoints } from './v1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshiftEndpoints';

/**
* Configuration overriding for an OpenShift component in a plugin
*/
export class V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift {
    'endpoints'?: Array<V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshiftEndpoints>;
    /**
    * Inlined manifest
    */
    'inlined'?: string;
    /**
    * Type of Kubernetes-like location
    */
    'locationType'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift.LocationTypeEnum;
    /**
    * Mandatory name that allows referencing the component in commands, or inside a parent
    */
    'name': string;
    /**
    * Location in a file fetched from a uri.
    */
    'uri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endpoints",
            "baseName": "endpoints",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshiftEndpoints>"
        },
        {
            "name": "inlined",
            "baseName": "inlined",
            "type": "string"
        },
        {
            "name": "locationType",
            "baseName": "locationType",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift.LocationTypeEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift {
    export enum LocationTypeEnum {
        Uri = <any> 'Uri',
        Inlined = <any> 'Inlined'
    }
}
