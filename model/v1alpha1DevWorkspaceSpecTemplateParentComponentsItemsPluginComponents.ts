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

import { V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsContainer } from './v1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsContainer';
import { V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsKubernetes } from './v1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsKubernetes';
import { V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift } from './v1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift';
import { V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsVolume } from './v1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsVolume';

export class V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponents {
    /**
    * Type of component override for a plugin
    */
    'componentType'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponents.ComponentTypeEnum;
    'container'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsContainer;
    'kubernetes'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsKubernetes;
    'openshift'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift;
    'volume'?: V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsVolume;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "componentType",
            "baseName": "componentType",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponents.ComponentTypeEnum"
        },
        {
            "name": "container",
            "baseName": "container",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsContainer"
        },
        {
            "name": "kubernetes",
            "baseName": "kubernetes",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsKubernetes"
        },
        {
            "name": "openshift",
            "baseName": "openshift",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsOpenshift"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponentsItemsVolume"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponents.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsPluginComponents {
    export enum ComponentTypeEnum {
        Container = <any> 'Container',
        Kubernetes = <any> 'Kubernetes',
        Openshift = <any> 'Openshift',
        Volume = <any> 'Volume'
    }
}
