// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file chat-identity.proto (syntax proto3)
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
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf'
import { ImageType } from './enums_pb.js'

/**
 * ChatIdentity represents the user defined identity associated with their public chat key
 *
 * @generated from message ChatIdentity
 */
export class ChatIdentity extends Message<ChatIdentity> {
  /**
   * Lamport timestamp of the message
   *
   * @generated from field: uint64 clock = 1;
   */
  clock = protoInt64.zero

  /**
   * ens_name is the valid ENS name associated with the chat key
   *
   * @generated from field: string ens_name = 2;
   */
  ensName = ''

  /**
   * images is a string indexed mapping of images associated with an identity
   *
   * @generated from field: map<string, IdentityImage> images = 3;
   */
  images: { [key: string]: IdentityImage } = {}

  /**
   * display name is the user set identity
   *
   * @generated from field: string display_name = 4;
   */
  displayName = ''

  /**
   * description is the user set description
   *
   * @generated from field: string description = 5;
   */
  description = ''

  /**
   * @generated from field: string color = 6;
   */
  color = ''

  /**
   * @generated from field: string emoji = 7;
   */
  emoji = ''

  /**
   * @generated from field: repeated SocialLink social_links = 8;
   */
  socialLinks: SocialLink[] = []

  /**
   * first known message timestamp in seconds (valid only for community chats for now)
   * 0 - unknown
   * 1 - no messages
   *
   * @generated from field: uint32 first_message_timestamp = 9;
   */
  firstMessageTimestamp = 0

  constructor(data?: PartialMessage<ChatIdentity>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'ChatIdentity'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'clock', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'ens_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'images',
      kind: 'map',
      K: 9 /* ScalarType.STRING */,
      V: { kind: 'message', T: IdentityImage },
    },
    {
      no: 4,
      name: 'display_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 5,
      name: 'description',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 6, name: 'color', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 7, name: 'emoji', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 8,
      name: 'social_links',
      kind: 'message',
      T: SocialLink,
      repeated: true,
    },
    {
      no: 9,
      name: 'first_message_timestamp',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ChatIdentity {
    return new ChatIdentity().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ChatIdentity {
    return new ChatIdentity().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ChatIdentity {
    return new ChatIdentity().fromJsonString(jsonString, options)
  }

  static equals(
    a: ChatIdentity | PlainMessage<ChatIdentity> | undefined,
    b: ChatIdentity | PlainMessage<ChatIdentity> | undefined
  ): boolean {
    return proto3.util.equals(ChatIdentity, a, b)
  }
}

/**
 * ProfileImage represents data associated with a user's profile image
 *
 * @generated from message IdentityImage
 */
export class IdentityImage extends Message<IdentityImage> {
  /**
   * payload is a context based payload for the profile image data,
   * context is determined by the `source_type`
   *
   * @generated from field: bytes payload = 1;
   */
  payload = new Uint8Array(0)

  /**
   * source_type signals the image payload source
   *
   * @generated from field: IdentityImage.SourceType source_type = 2;
   */
  sourceType = IdentityImage_SourceType.UNKNOWN_SOURCE_TYPE

  /**
   * image_type signals the image type and method of parsing the payload
   *
   * @generated from field: ImageType image_type = 3;
   */
  imageType = ImageType.UNKNOWN_IMAGE_TYPE

  /**
   * encryption_keys is a list of encrypted keys that can be used to decrypted an encrypted payload
   *
   * @generated from field: repeated bytes encryption_keys = 4;
   */
  encryptionKeys: Uint8Array[] = []

  /**
   * encrypted signals the encryption state of the payload, default is false.
   *
   * @generated from field: bool encrypted = 5;
   */
  encrypted = false

  constructor(data?: PartialMessage<IdentityImage>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'IdentityImage'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'payload', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
    {
      no: 2,
      name: 'source_type',
      kind: 'enum',
      T: proto3.getEnumType(IdentityImage_SourceType),
    },
    {
      no: 3,
      name: 'image_type',
      kind: 'enum',
      T: proto3.getEnumType(ImageType),
    },
    {
      no: 4,
      name: 'encryption_keys',
      kind: 'scalar',
      T: 12 /* ScalarType.BYTES */,
      repeated: true,
    },
    { no: 5, name: 'encrypted', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): IdentityImage {
    return new IdentityImage().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): IdentityImage {
    return new IdentityImage().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): IdentityImage {
    return new IdentityImage().fromJsonString(jsonString, options)
  }

  static equals(
    a: IdentityImage | PlainMessage<IdentityImage> | undefined,
    b: IdentityImage | PlainMessage<IdentityImage> | undefined
  ): boolean {
    return proto3.util.equals(IdentityImage, a, b)
  }
}

/**
 * SourceType are the predefined types of image source allowed
 *
 * @generated from enum IdentityImage.SourceType
 */
export enum IdentityImage_SourceType {
  /**
   * @generated from enum value: UNKNOWN_SOURCE_TYPE = 0;
   */
  UNKNOWN_SOURCE_TYPE = 0,

  /**
   * RAW_PAYLOAD image byte data
   *
   * @generated from enum value: RAW_PAYLOAD = 1;
   */
  RAW_PAYLOAD = 1,

  /**
   * ENS_AVATAR uses the ENS record's resolver get-text-data.avatar data
   * The `payload` field will be ignored if ENS_AVATAR is selected
   * The application will read and parse the ENS avatar data as image payload data, URLs will be ignored
   * The parent `ChatMessageIdentity` must have a valid `ens_name` set
   *
   * @generated from enum value: ENS_AVATAR = 2;
   */
  ENS_AVATAR = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(IdentityImage_SourceType)
proto3.util.setEnumType(IdentityImage_SourceType, 'IdentityImage.SourceType', [
  { no: 0, name: 'UNKNOWN_SOURCE_TYPE' },
  { no: 1, name: 'RAW_PAYLOAD' },
  { no: 2, name: 'ENS_AVATAR' },
])

/**
 * SocialLinks represents social link assosiated with given chat identity (personal/community)
 *
 * @generated from message SocialLink
 */
export class SocialLink extends Message<SocialLink> {
  /**
   * @generated from field: string text = 1;
   */
  text = ''

  /**
   * @generated from field: string url = 2;
   */
  url = ''

  constructor(data?: PartialMessage<SocialLink>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'SocialLink'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'text', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'url', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SocialLink {
    return new SocialLink().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SocialLink {
    return new SocialLink().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SocialLink {
    return new SocialLink().fromJsonString(jsonString, options)
  }

  static equals(
    a: SocialLink | PlainMessage<SocialLink> | undefined,
    b: SocialLink | PlainMessage<SocialLink> | undefined
  ): boolean {
    return proto3.util.equals(SocialLink, a, b)
  }
}
