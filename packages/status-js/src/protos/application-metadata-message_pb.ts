// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file application-metadata-message.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf'
import { Message, proto3 } from '@bufbuild/protobuf'

/**
 * @generated from message ApplicationMetadataMessage
 */
export class ApplicationMetadataMessage extends Message<ApplicationMetadataMessage> {
  /**
   * Signature of the payload field
   *
   * @generated from field: bytes signature = 1;
   */
  signature = new Uint8Array(0)

  /**
   * This is the encoded protobuf of the application level message, i.e ChatMessage
   *
   * @generated from field: bytes payload = 2;
   */
  payload = new Uint8Array(0)

  /**
   * The type of protobuf message sent
   *
   * @generated from field: ApplicationMetadataMessage.Type type = 3;
   */
  type = ApplicationMetadataMessage_Type.UNKNOWN_UNSPECIFIED

  constructor(data?: PartialMessage<ApplicationMetadataMessage>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'ApplicationMetadataMessage'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'signature', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: 'payload', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    {
      no: 3,
      name: 'type',
      kind: 'enum',
      T: proto3.getEnumType(ApplicationMetadataMessage_Type),
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ApplicationMetadataMessage {
    return new ApplicationMetadataMessage().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ApplicationMetadataMessage {
    return new ApplicationMetadataMessage().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ApplicationMetadataMessage {
    return new ApplicationMetadataMessage().fromJsonString(jsonString, options)
  }

  static equals(
    a:
      | ApplicationMetadataMessage
      | PlainMessage<ApplicationMetadataMessage>
      | undefined,
    b:
      | ApplicationMetadataMessage
      | PlainMessage<ApplicationMetadataMessage>
      | undefined
  ): boolean {
    return proto3.util.equals(ApplicationMetadataMessage, a, b)
  }
}

/**
 * @generated from enum ApplicationMetadataMessage.Type
 */
export enum ApplicationMetadataMessage_Type {
  /**
   * @generated from enum value: TYPE_UNKNOWN_UNSPECIFIED = 0;
   */
  UNKNOWN_UNSPECIFIED = 0,

  /**
   * @generated from enum value: TYPE_CHAT_MESSAGE = 1;
   */
  CHAT_MESSAGE = 1,

  /**
   * @generated from enum value: TYPE_CONTACT_UPDATE = 2;
   */
  CONTACT_UPDATE = 2,

  /**
   * @generated from enum value: TYPE_MEMBERSHIP_UPDATE_MESSAGE = 3;
   */
  MEMBERSHIP_UPDATE_MESSAGE = 3,

  /**
   * @generated from enum value: TYPE_PAIR_INSTALLATION = 4;
   */
  PAIR_INSTALLATION = 4,

  /**
   * @generated from enum value: TYPE_SYNC_INSTALLATION = 5;
   */
  SYNC_INSTALLATION = 5,

  /**
   * @generated from enum value: TYPE_REQUEST_ADDRESS_FOR_TRANSACTION = 6;
   */
  REQUEST_ADDRESS_FOR_TRANSACTION = 6,

  /**
   * @generated from enum value: TYPE_ACCEPT_REQUEST_ADDRESS_FOR_TRANSACTION = 7;
   */
  ACCEPT_REQUEST_ADDRESS_FOR_TRANSACTION = 7,

  /**
   * @generated from enum value: TYPE_DECLINE_REQUEST_ADDRESS_FOR_TRANSACTION = 8;
   */
  DECLINE_REQUEST_ADDRESS_FOR_TRANSACTION = 8,

  /**
   * @generated from enum value: TYPE_REQUEST_TRANSACTION = 9;
   */
  REQUEST_TRANSACTION = 9,

  /**
   * @generated from enum value: TYPE_SEND_TRANSACTION = 10;
   */
  SEND_TRANSACTION = 10,

  /**
   * @generated from enum value: TYPE_DECLINE_REQUEST_TRANSACTION = 11;
   */
  DECLINE_REQUEST_TRANSACTION = 11,

  /**
   * @generated from enum value: TYPE_SYNC_INSTALLATION_CONTACT = 12;
   */
  SYNC_INSTALLATION_CONTACT = 12,

  /**
   * @generated from enum value: TYPE_SYNC_INSTALLATION_ACCOUNT = 13;
   */
  SYNC_INSTALLATION_ACCOUNT = 13,

  /**
   * @generated from enum value: TYPE_SYNC_INSTALLATION_PUBLIC_CHAT = 14;
   */
  SYNC_INSTALLATION_PUBLIC_CHAT = 14,

  /**
   * @generated from enum value: TYPE_CONTACT_CODE_ADVERTISEMENT = 15;
   */
  CONTACT_CODE_ADVERTISEMENT = 15,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_REGISTRATION = 16;
   */
  PUSH_NOTIFICATION_REGISTRATION = 16,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_REGISTRATION_RESPONSE = 17;
   */
  PUSH_NOTIFICATION_REGISTRATION_RESPONSE = 17,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_QUERY = 18;
   */
  PUSH_NOTIFICATION_QUERY = 18,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_QUERY_RESPONSE = 19;
   */
  PUSH_NOTIFICATION_QUERY_RESPONSE = 19,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_REQUEST = 20;
   */
  PUSH_NOTIFICATION_REQUEST = 20,

  /**
   * @generated from enum value: TYPE_PUSH_NOTIFICATION_RESPONSE = 21;
   */
  PUSH_NOTIFICATION_RESPONSE = 21,

  /**
   * @generated from enum value: TYPE_EMOJI_REACTION = 22;
   */
  EMOJI_REACTION = 22,

  /**
   * @generated from enum value: TYPE_GROUP_CHAT_INVITATION = 23;
   */
  GROUP_CHAT_INVITATION = 23,

  /**
   * @generated from enum value: TYPE_CHAT_IDENTITY = 24;
   */
  CHAT_IDENTITY = 24,

  /**
   * @generated from enum value: TYPE_COMMUNITY_DESCRIPTION = 25;
   */
  COMMUNITY_DESCRIPTION = 25,

  /**
   * @generated from enum value: TYPE_COMMUNITY_INVITATION = 26;
   */
  COMMUNITY_INVITATION = 26,

  /**
   * @generated from enum value: TYPE_COMMUNITY_REQUEST_TO_JOIN = 27;
   */
  COMMUNITY_REQUEST_TO_JOIN = 27,

  /**
   * @generated from enum value: TYPE_PIN_MESSAGE = 28;
   */
  PIN_MESSAGE = 28,

  /**
   * @generated from enum value: TYPE_EDIT_MESSAGE = 29;
   */
  EDIT_MESSAGE = 29,

  /**
   * @generated from enum value: TYPE_STATUS_UPDATE = 30;
   */
  STATUS_UPDATE = 30,

  /**
   * @generated from enum value: TYPE_DELETE_MESSAGE = 31;
   */
  DELETE_MESSAGE = 31,

  /**
   * @generated from enum value: TYPE_SYNC_INSTALLATION_COMMUNITY = 32;
   */
  SYNC_INSTALLATION_COMMUNITY = 32,

  /**
   * @generated from enum value: TYPE_ANONYMOUS_METRIC_BATCH = 33;
   */
  ANONYMOUS_METRIC_BATCH = 33,
}
// Retrieve enum metadata with: proto3.getEnumType(ApplicationMetadataMessage_Type)
proto3.util.setEnumType(
  ApplicationMetadataMessage_Type,
  'ApplicationMetadataMessage.Type',
  [
    { no: 0, name: 'TYPE_UNKNOWN_UNSPECIFIED' },
    { no: 1, name: 'TYPE_CHAT_MESSAGE' },
    { no: 2, name: 'TYPE_CONTACT_UPDATE' },
    { no: 3, name: 'TYPE_MEMBERSHIP_UPDATE_MESSAGE' },
    { no: 4, name: 'TYPE_PAIR_INSTALLATION' },
    { no: 5, name: 'TYPE_SYNC_INSTALLATION' },
    { no: 6, name: 'TYPE_REQUEST_ADDRESS_FOR_TRANSACTION' },
    { no: 7, name: 'TYPE_ACCEPT_REQUEST_ADDRESS_FOR_TRANSACTION' },
    { no: 8, name: 'TYPE_DECLINE_REQUEST_ADDRESS_FOR_TRANSACTION' },
    { no: 9, name: 'TYPE_REQUEST_TRANSACTION' },
    { no: 10, name: 'TYPE_SEND_TRANSACTION' },
    { no: 11, name: 'TYPE_DECLINE_REQUEST_TRANSACTION' },
    { no: 12, name: 'TYPE_SYNC_INSTALLATION_CONTACT' },
    { no: 13, name: 'TYPE_SYNC_INSTALLATION_ACCOUNT' },
    { no: 14, name: 'TYPE_SYNC_INSTALLATION_PUBLIC_CHAT' },
    { no: 15, name: 'TYPE_CONTACT_CODE_ADVERTISEMENT' },
    { no: 16, name: 'TYPE_PUSH_NOTIFICATION_REGISTRATION' },
    { no: 17, name: 'TYPE_PUSH_NOTIFICATION_REGISTRATION_RESPONSE' },
    { no: 18, name: 'TYPE_PUSH_NOTIFICATION_QUERY' },
    { no: 19, name: 'TYPE_PUSH_NOTIFICATION_QUERY_RESPONSE' },
    { no: 20, name: 'TYPE_PUSH_NOTIFICATION_REQUEST' },
    { no: 21, name: 'TYPE_PUSH_NOTIFICATION_RESPONSE' },
    { no: 22, name: 'TYPE_EMOJI_REACTION' },
    { no: 23, name: 'TYPE_GROUP_CHAT_INVITATION' },
    { no: 24, name: 'TYPE_CHAT_IDENTITY' },
    { no: 25, name: 'TYPE_COMMUNITY_DESCRIPTION' },
    { no: 26, name: 'TYPE_COMMUNITY_INVITATION' },
    { no: 27, name: 'TYPE_COMMUNITY_REQUEST_TO_JOIN' },
    { no: 28, name: 'TYPE_PIN_MESSAGE' },
    { no: 29, name: 'TYPE_EDIT_MESSAGE' },
    { no: 30, name: 'TYPE_STATUS_UPDATE' },
    { no: 31, name: 'TYPE_DELETE_MESSAGE' },
    { no: 32, name: 'TYPE_SYNC_INSTALLATION_COMMUNITY' },
    { no: 33, name: 'TYPE_ANONYMOUS_METRIC_BATCH' },
  ]
)
