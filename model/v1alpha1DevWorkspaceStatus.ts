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

import { V1alpha1DevWorkspaceStatusConditions } from './v1alpha1DevWorkspaceStatusConditions';

/**
* DevWorkspaceStatus defines the observed state of DevWorkspace
*/
export class V1alpha1DevWorkspaceStatus {
    /**
    * Conditions represent the latest available observations of an object\'s state
    */
    'conditions'?: Array<V1alpha1DevWorkspaceStatusConditions>;
    /**
    * URL at which the Worksace Editor can be joined
    */
    'ideUrl'?: string;
    /**
    * Message is a short user-readable message giving additional information about an object\'s state
    */
    'message'?: string;
    'phase'?: string;
    /**
    * Id of the workspace
    */
    'workspaceId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1DevWorkspaceStatusConditions>"
        },
        {
            "name": "ideUrl",
            "baseName": "ideUrl",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceStatus.attributeTypeMap;
    }
}

