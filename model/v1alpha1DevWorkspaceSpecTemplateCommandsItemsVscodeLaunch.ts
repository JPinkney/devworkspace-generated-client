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

import { V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunchGroup } from './v1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunchGroup';

/**
* Command providing the definition of a VsCode launch action   Deprecated; removed in v1alpha2
*/
export class V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunch {
    /**
    * Optional map of free-form additional command attributes
    */
    'attributes'?: { [key: string]: string; };
    'group'?: V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunchGroup;
    /**
    * Mandatory identifier that allows referencing this command in composite commands, from a parent, or in events.
    */
    'id': string;
    /**
    * Inlined content of the VsCode configuration
    */
    'inlined'?: string;
    /**
    * Type of Vscode configuration command location
    */
    'locationType'?: V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunch.LocationTypeEnum;
    /**
    * Location as an absolute of relative URI the VsCode configuration will be fetched from
    */
    'uri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunchGroup"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "inlined",
            "baseName": "inlined",
            "type": "string"
        },
        {
            "name": "locationType",
            "baseName": "locationType",
            "type": "V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunch.LocationTypeEnum"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunch.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateCommandsItemsVscodeLaunch {
    export enum LocationTypeEnum {
        Uri = <any> 'Uri',
        Inlined = <any> 'Inlined'
    }
}
