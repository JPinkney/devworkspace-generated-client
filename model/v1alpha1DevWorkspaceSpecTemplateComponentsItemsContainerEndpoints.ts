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


export class V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerEndpoints {
    /**
    * Map of implementation-dependant string-based free-form attributes.   Examples of Che-specific attributes:   - cookiesAuthEnabled: \"true\" / \"false\",   - type: \"terminal\" / \"ide\" / \"ide-dev\",
    */
    'attributes'?: { [key: string]: string; };
    /**
    * Describes how the endpoint should be exposed on the network.   - `public` means that the endpoint will be exposed on the public network, typically through a K8S ingress or an OpenShift route.   - `internal` means that the endpoint will be exposed internally outside of the main workspace POD, typically by K8S services, to be consumed by other elements running on the same cloud internal network.   - `none` means that the endpoint will not be exposed and will only be accessible inside the main workspace POD, on a local address.   Default value is `public`
    */
    'exposure'?: V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerEndpoints.ExposureEnum;
    'name': string;
    /**
    * Path of the endpoint URL
    */
    'path'?: string;
    /**
    * Describes the application and transport protocols of the traffic that will go through this endpoint.   - `http`: Endpoint will have `http` traffic, typically on a TCP connection. It will be automaticaly promoted to `https` when the `secure` field is set to `true`.   - `https`: Endpoint will have `https` traffic, typically on a TCP connection.   - `ws`: Endpoint will have `ws` traffic, typically on a TCP connection. It will be automaticaly promoted to `wss` when the `secure` field is set to `true`.   - `wss`: Endpoint will have `wss` traffic, typically on a TCP connection.   - `tcp`: Endpoint will have traffic on a TCP connection, without specifying an application protocol.   - `udp`: Endpoint will have traffic on an UDP connection, without specifying an application protocol.   Default value is `http`
    */
    'protocol'?: string;
    /**
    * Describes whether the endpoint should be secured and protected by some authentication process
    */
    'secure'?: boolean;
    'targetPort'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "exposure",
            "baseName": "exposure",
            "type": "V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerEndpoints.ExposureEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        },
        {
            "name": "secure",
            "baseName": "secure",
            "type": "boolean"
        },
        {
            "name": "targetPort",
            "baseName": "targetPort",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerEndpoints.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateComponentsItemsContainerEndpoints {
    export enum ExposureEnum {
        Public = <any> 'public',
        Internal = <any> 'internal',
        None = <any> 'none'
    }
}
