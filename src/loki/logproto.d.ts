import $protobuf from 'protobufjs';
/** Namespace logproto. */
export namespace logproto {
  /** Represents a Pusher */
  class Pusher extends $protobuf.rpc.Service {
    /**
     * Constructs a new Pusher service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new Pusher service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): Pusher;

    /**
     * Calls Push.
     * @param request PushRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PushResponse
     */
    public push(
      request: logproto.IPushRequest,
      callback: logproto.Pusher.PushCallback
    ): void;

    /**
     * Calls Push.
     * @param request PushRequest message or plain object
     * @returns Promise
     */
    public push(request: logproto.IPushRequest): Promise<logproto.PushResponse>;
  }

  namespace Pusher {
    /**
     * Callback as used by {@link logproto.Pusher#push}.
     * @param error Error, if any
     * @param [response] PushResponse
     */
    type PushCallback = (
      error: Error | null,
      response?: logproto.PushResponse
    ) => void;
  }

  /** Represents a Querier */
  class Querier extends $protobuf.rpc.Service {
    /**
     * Constructs a new Querier service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new Querier service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): Querier;

    /**
     * Calls Query.
     * @param request QueryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and QueryResponse
     */
    public query(
      request: logproto.IQueryRequest,
      callback: logproto.Querier.QueryCallback
    ): void;

    /**
     * Calls Query.
     * @param request QueryRequest message or plain object
     * @returns Promise
     */
    public query(
      request: logproto.IQueryRequest
    ): Promise<logproto.QueryResponse>;

    /**
     * Calls QuerySample.
     * @param request SampleQueryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SampleQueryResponse
     */
    public querySample(
      request: logproto.ISampleQueryRequest,
      callback: logproto.Querier.QuerySampleCallback
    ): void;

    /**
     * Calls QuerySample.
     * @param request SampleQueryRequest message or plain object
     * @returns Promise
     */
    public querySample(
      request: logproto.ISampleQueryRequest
    ): Promise<logproto.SampleQueryResponse>;

    /**
     * Calls Label.
     * @param request LabelRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and LabelResponse
     */
    public label(
      request: logproto.ILabelRequest,
      callback: logproto.Querier.LabelCallback
    ): void;

    /**
     * Calls Label.
     * @param request LabelRequest message or plain object
     * @returns Promise
     */
    public label(
      request: logproto.ILabelRequest
    ): Promise<logproto.LabelResponse>;

    /**
     * Calls Tail.
     * @param request TailRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and TailResponse
     */
    public tail(
      request: logproto.ITailRequest,
      callback: logproto.Querier.TailCallback
    ): void;

    /**
     * Calls Tail.
     * @param request TailRequest message or plain object
     * @returns Promise
     */
    public tail(request: logproto.ITailRequest): Promise<logproto.TailResponse>;

    /**
     * Calls Series.
     * @param request SeriesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SeriesResponse
     */
    public series(
      request: logproto.ISeriesRequest,
      callback: logproto.Querier.SeriesCallback
    ): void;

    /**
     * Calls Series.
     * @param request SeriesRequest message or plain object
     * @returns Promise
     */
    public series(
      request: logproto.ISeriesRequest
    ): Promise<logproto.SeriesResponse>;

    /**
     * Calls TailersCount.
     * @param request TailersCountRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and TailersCountResponse
     */
    public tailersCount(
      request: logproto.ITailersCountRequest,
      callback: logproto.Querier.TailersCountCallback
    ): void;

    /**
     * Calls TailersCount.
     * @param request TailersCountRequest message or plain object
     * @returns Promise
     */
    public tailersCount(
      request: logproto.ITailersCountRequest
    ): Promise<logproto.TailersCountResponse>;

    /**
     * Calls GetChunkIDs.
     * @param request GetChunkIDsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetChunkIDsResponse
     */
    public getChunkIDs(
      request: logproto.IGetChunkIDsRequest,
      callback: logproto.Querier.GetChunkIDsCallback
    ): void;

    /**
     * Calls GetChunkIDs.
     * @param request GetChunkIDsRequest message or plain object
     * @returns Promise
     */
    public getChunkIDs(
      request: logproto.IGetChunkIDsRequest
    ): Promise<logproto.GetChunkIDsResponse>;
  }

  namespace Querier {
    /**
     * Callback as used by {@link logproto.Querier#query}.
     * @param error Error, if any
     * @param [response] QueryResponse
     */
    type QueryCallback = (
      error: Error | null,
      response?: logproto.QueryResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#querySample}.
     * @param error Error, if any
     * @param [response] SampleQueryResponse
     */
    type QuerySampleCallback = (
      error: Error | null,
      response?: logproto.SampleQueryResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#label}.
     * @param error Error, if any
     * @param [response] LabelResponse
     */
    type LabelCallback = (
      error: Error | null,
      response?: logproto.LabelResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#tail}.
     * @param error Error, if any
     * @param [response] TailResponse
     */
    type TailCallback = (
      error: Error | null,
      response?: logproto.TailResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#series}.
     * @param error Error, if any
     * @param [response] SeriesResponse
     */
    type SeriesCallback = (
      error: Error | null,
      response?: logproto.SeriesResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#tailersCount}.
     * @param error Error, if any
     * @param [response] TailersCountResponse
     */
    type TailersCountCallback = (
      error: Error | null,
      response?: logproto.TailersCountResponse
    ) => void;

    /**
     * Callback as used by {@link logproto.Querier#getChunkIDs}.
     * @param error Error, if any
     * @param [response] GetChunkIDsResponse
     */
    type GetChunkIDsCallback = (
      error: Error | null,
      response?: logproto.GetChunkIDsResponse
    ) => void;
  }

  /** Represents an Ingester */
  class Ingester extends $protobuf.rpc.Service {
    /**
     * Constructs a new Ingester service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new Ingester service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): Ingester;

    /**
     * Calls TransferChunks.
     * @param request TimeSeriesChunk message or plain object
     * @param callback Node-style callback called with the error, if any, and TransferChunksResponse
     */
    public transferChunks(
      request: logproto.ITimeSeriesChunk,
      callback: logproto.Ingester.TransferChunksCallback
    ): void;

    /**
     * Calls TransferChunks.
     * @param request TimeSeriesChunk message or plain object
     * @returns Promise
     */
    public transferChunks(
      request: logproto.ITimeSeriesChunk
    ): Promise<logproto.TransferChunksResponse>;
  }

  namespace Ingester {
    /**
     * Callback as used by {@link logproto.Ingester#transferChunks}.
     * @param error Error, if any
     * @param [response] TransferChunksResponse
     */
    type TransferChunksCallback = (
      error: Error | null,
      response?: logproto.TransferChunksResponse
    ) => void;
  }

  /** Properties of a PushRequest. */
  interface IPushRequest {
    /** PushRequest streams */
    streams?: logproto.IStreamAdapter[] | null;
  }

  /** Represents a PushRequest. */
  class PushRequest implements IPushRequest {
    /**
     * Constructs a new PushRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IPushRequest);

    /** PushRequest streams. */
    public streams: logproto.IStreamAdapter[];

    /**
     * Creates a new PushRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushRequest instance
     */
    public static create(
      properties?: logproto.IPushRequest
    ): logproto.PushRequest;

    /**
     * Encodes the specified PushRequest message. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
     * @param message PushRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IPushRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PushRequest message, length delimited. Does not implicitly {@link logproto.PushRequest.verify|verify} messages.
     * @param message PushRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IPushRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PushRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PushRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.PushRequest;

    /**
     * Decodes a PushRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PushRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.PushRequest;

    /**
     * Verifies a PushRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a PushRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PushRequest
     */
    public static fromObject(object: {[k: string]: any}): logproto.PushRequest;

    /**
     * Creates a plain object from a PushRequest message. Also converts values to other types if specified.
     * @param message PushRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.PushRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this PushRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a PushResponse. */
  interface IPushResponse {}

  /** Represents a PushResponse. */
  class PushResponse implements IPushResponse {
    /**
     * Constructs a new PushResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IPushResponse);

    /**
     * Creates a new PushResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushResponse instance
     */
    public static create(
      properties?: logproto.IPushResponse
    ): logproto.PushResponse;

    /**
     * Encodes the specified PushResponse message. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
     * @param message PushResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IPushResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PushResponse message, length delimited. Does not implicitly {@link logproto.PushResponse.verify|verify} messages.
     * @param message PushResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IPushResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PushResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PushResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.PushResponse;

    /**
     * Decodes a PushResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PushResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.PushResponse;

    /**
     * Verifies a PushResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a PushResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PushResponse
     */
    public static fromObject(object: {[k: string]: any}): logproto.PushResponse;

    /**
     * Creates a plain object from a PushResponse message. Also converts values to other types if specified.
     * @param message PushResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.PushResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this PushResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a QueryRequest. */
  interface IQueryRequest {
    /** QueryRequest selector */
    selector?: string | null;

    /** QueryRequest limit */
    limit?: number | null;

    /** QueryRequest start */
    start?: google.protobuf.ITimestamp | null;

    /** QueryRequest end */
    end?: google.protobuf.ITimestamp | null;

    /** QueryRequest direction */
    direction?: logproto.Direction | null;

    /** QueryRequest shards */
    shards?: string[] | null;
  }

  /** Represents a QueryRequest. */
  class QueryRequest implements IQueryRequest {
    /**
     * Constructs a new QueryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IQueryRequest);

    /** QueryRequest selector. */
    public selector: string;

    /** QueryRequest limit. */
    public limit: number;

    /** QueryRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /** QueryRequest end. */
    public end?: google.protobuf.ITimestamp | null;

    /** QueryRequest direction. */
    public direction: logproto.Direction;

    /** QueryRequest shards. */
    public shards: string[];

    /**
     * Creates a new QueryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryRequest instance
     */
    public static create(
      properties?: logproto.IQueryRequest
    ): logproto.QueryRequest;

    /**
     * Encodes the specified QueryRequest message. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
     * @param message QueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IQueryRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified QueryRequest message, length delimited. Does not implicitly {@link logproto.QueryRequest.verify|verify} messages.
     * @param message QueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IQueryRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a QueryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.QueryRequest;

    /**
     * Decodes a QueryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.QueryRequest;

    /**
     * Verifies a QueryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a QueryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryRequest
     */
    public static fromObject(object: {[k: string]: any}): logproto.QueryRequest;

    /**
     * Creates a plain object from a QueryRequest message. Also converts values to other types if specified.
     * @param message QueryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.QueryRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this QueryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a SampleQueryRequest. */
  interface ISampleQueryRequest {
    /** SampleQueryRequest selector */
    selector?: string | null;

    /** SampleQueryRequest start */
    start?: google.protobuf.ITimestamp | null;

    /** SampleQueryRequest end */
    end?: google.protobuf.ITimestamp | null;

    /** SampleQueryRequest shards */
    shards?: string[] | null;
  }

  /** Represents a SampleQueryRequest. */
  class SampleQueryRequest implements ISampleQueryRequest {
    /**
     * Constructs a new SampleQueryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISampleQueryRequest);

    /** SampleQueryRequest selector. */
    public selector: string;

    /** SampleQueryRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /** SampleQueryRequest end. */
    public end?: google.protobuf.ITimestamp | null;

    /** SampleQueryRequest shards. */
    public shards: string[];

    /**
     * Creates a new SampleQueryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SampleQueryRequest instance
     */
    public static create(
      properties?: logproto.ISampleQueryRequest
    ): logproto.SampleQueryRequest;

    /**
     * Encodes the specified SampleQueryRequest message. Does not implicitly {@link logproto.SampleQueryRequest.verify|verify} messages.
     * @param message SampleQueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISampleQueryRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SampleQueryRequest message, length delimited. Does not implicitly {@link logproto.SampleQueryRequest.verify|verify} messages.
     * @param message SampleQueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISampleQueryRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SampleQueryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SampleQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.SampleQueryRequest;

    /**
     * Decodes a SampleQueryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SampleQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.SampleQueryRequest;

    /**
     * Verifies a SampleQueryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a SampleQueryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SampleQueryRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.SampleQueryRequest;

    /**
     * Creates a plain object from a SampleQueryRequest message. Also converts values to other types if specified.
     * @param message SampleQueryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.SampleQueryRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this SampleQueryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a SampleQueryResponse. */
  interface ISampleQueryResponse {
    /** SampleQueryResponse series */
    series?: logproto.ISeries[] | null;
  }

  /** Represents a SampleQueryResponse. */
  class SampleQueryResponse implements ISampleQueryResponse {
    /**
     * Constructs a new SampleQueryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISampleQueryResponse);

    /** SampleQueryResponse series. */
    public series: logproto.ISeries[];

    /**
     * Creates a new SampleQueryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SampleQueryResponse instance
     */
    public static create(
      properties?: logproto.ISampleQueryResponse
    ): logproto.SampleQueryResponse;

    /**
     * Encodes the specified SampleQueryResponse message. Does not implicitly {@link logproto.SampleQueryResponse.verify|verify} messages.
     * @param message SampleQueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISampleQueryResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SampleQueryResponse message, length delimited. Does not implicitly {@link logproto.SampleQueryResponse.verify|verify} messages.
     * @param message SampleQueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISampleQueryResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SampleQueryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SampleQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.SampleQueryResponse;

    /**
     * Decodes a SampleQueryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SampleQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.SampleQueryResponse;

    /**
     * Verifies a SampleQueryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a SampleQueryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SampleQueryResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.SampleQueryResponse;

    /**
     * Creates a plain object from a SampleQueryResponse message. Also converts values to other types if specified.
     * @param message SampleQueryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.SampleQueryResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this SampleQueryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Direction enum. */
  enum Direction {
    FORWARD = 0,
    BACKWARD = 1,
  }

  /** Properties of a QueryResponse. */
  interface IQueryResponse {
    /** QueryResponse streams */
    streams?: logproto.IStreamAdapter[] | null;
  }

  /** Represents a QueryResponse. */
  class QueryResponse implements IQueryResponse {
    /**
     * Constructs a new QueryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IQueryResponse);

    /** QueryResponse streams. */
    public streams: logproto.IStreamAdapter[];

    /**
     * Creates a new QueryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryResponse instance
     */
    public static create(
      properties?: logproto.IQueryResponse
    ): logproto.QueryResponse;

    /**
     * Encodes the specified QueryResponse message. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
     * @param message QueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IQueryResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified QueryResponse message, length delimited. Does not implicitly {@link logproto.QueryResponse.verify|verify} messages.
     * @param message QueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IQueryResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a QueryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.QueryResponse;

    /**
     * Decodes a QueryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.QueryResponse;

    /**
     * Verifies a QueryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a QueryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.QueryResponse;

    /**
     * Creates a plain object from a QueryResponse message. Also converts values to other types if specified.
     * @param message QueryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.QueryResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this QueryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a LabelRequest. */
  interface ILabelRequest {
    /** LabelRequest name */
    name?: string | null;

    /** LabelRequest values */
    values?: boolean | null;

    /** LabelRequest start */
    start?: google.protobuf.ITimestamp | null;

    /** LabelRequest end */
    end?: google.protobuf.ITimestamp | null;
  }

  /** Represents a LabelRequest. */
  class LabelRequest implements ILabelRequest {
    /**
     * Constructs a new LabelRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ILabelRequest);

    /** LabelRequest name. */
    public name: string;

    /** LabelRequest values. */
    public values: boolean;

    /** LabelRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /** LabelRequest end. */
    public end?: google.protobuf.ITimestamp | null;

    /**
     * Creates a new LabelRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LabelRequest instance
     */
    public static create(
      properties?: logproto.ILabelRequest
    ): logproto.LabelRequest;

    /**
     * Encodes the specified LabelRequest message. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
     * @param message LabelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ILabelRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LabelRequest message, length delimited. Does not implicitly {@link logproto.LabelRequest.verify|verify} messages.
     * @param message LabelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ILabelRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LabelRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LabelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.LabelRequest;

    /**
     * Decodes a LabelRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LabelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.LabelRequest;

    /**
     * Verifies a LabelRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a LabelRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LabelRequest
     */
    public static fromObject(object: {[k: string]: any}): logproto.LabelRequest;

    /**
     * Creates a plain object from a LabelRequest message. Also converts values to other types if specified.
     * @param message LabelRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.LabelRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this LabelRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a LabelResponse. */
  interface ILabelResponse {
    /** LabelResponse values */
    values?: string[] | null;
  }

  /** Represents a LabelResponse. */
  class LabelResponse implements ILabelResponse {
    /**
     * Constructs a new LabelResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ILabelResponse);

    /** LabelResponse values. */
    public values: string[];

    /**
     * Creates a new LabelResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LabelResponse instance
     */
    public static create(
      properties?: logproto.ILabelResponse
    ): logproto.LabelResponse;

    /**
     * Encodes the specified LabelResponse message. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
     * @param message LabelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ILabelResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LabelResponse message, length delimited. Does not implicitly {@link logproto.LabelResponse.verify|verify} messages.
     * @param message LabelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ILabelResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LabelResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LabelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.LabelResponse;

    /**
     * Decodes a LabelResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LabelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.LabelResponse;

    /**
     * Verifies a LabelResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a LabelResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LabelResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.LabelResponse;

    /**
     * Creates a plain object from a LabelResponse message. Also converts values to other types if specified.
     * @param message LabelResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.LabelResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this LabelResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a StreamAdapter. */
  interface IStreamAdapter {
    /** StreamAdapter labels */
    labels?: string | null;

    /** StreamAdapter entries */
    entries?: logproto.IEntryAdapter[] | null;
  }

  /** Represents a StreamAdapter. */
  class StreamAdapter implements IStreamAdapter {
    /**
     * Constructs a new StreamAdapter.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IStreamAdapter);

    /** StreamAdapter labels. */
    public labels: string;

    /** StreamAdapter entries. */
    public entries: logproto.IEntryAdapter[];

    /**
     * Creates a new StreamAdapter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StreamAdapter instance
     */
    public static create(
      properties?: logproto.IStreamAdapter
    ): logproto.StreamAdapter;

    /**
     * Encodes the specified StreamAdapter message. Does not implicitly {@link logproto.StreamAdapter.verify|verify} messages.
     * @param message StreamAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IStreamAdapter,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified StreamAdapter message, length delimited. Does not implicitly {@link logproto.StreamAdapter.verify|verify} messages.
     * @param message StreamAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IStreamAdapter,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a StreamAdapter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StreamAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.StreamAdapter;

    /**
     * Decodes a StreamAdapter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StreamAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.StreamAdapter;

    /**
     * Verifies a StreamAdapter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a StreamAdapter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StreamAdapter
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.StreamAdapter;

    /**
     * Creates a plain object from a StreamAdapter message. Also converts values to other types if specified.
     * @param message StreamAdapter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.StreamAdapter,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this StreamAdapter to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of an EntryAdapter. */
  interface IEntryAdapter {
    /** EntryAdapter timestamp */
    timestamp?: google.protobuf.ITimestamp | null;

    /** EntryAdapter line */
    line?: string | null;
  }

  /** Represents an EntryAdapter. */
  class EntryAdapter implements IEntryAdapter {
    /**
     * Constructs a new EntryAdapter.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IEntryAdapter);

    /** EntryAdapter timestamp. */
    public timestamp?: google.protobuf.ITimestamp | null;

    /** EntryAdapter line. */
    public line: string;

    /**
     * Creates a new EntryAdapter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntryAdapter instance
     */
    public static create(
      properties?: logproto.IEntryAdapter
    ): logproto.EntryAdapter;

    /**
     * Encodes the specified EntryAdapter message. Does not implicitly {@link logproto.EntryAdapter.verify|verify} messages.
     * @param message EntryAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IEntryAdapter,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified EntryAdapter message, length delimited. Does not implicitly {@link logproto.EntryAdapter.verify|verify} messages.
     * @param message EntryAdapter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IEntryAdapter,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an EntryAdapter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntryAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.EntryAdapter;

    /**
     * Decodes an EntryAdapter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntryAdapter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.EntryAdapter;

    /**
     * Verifies an EntryAdapter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates an EntryAdapter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntryAdapter
     */
    public static fromObject(object: {[k: string]: any}): logproto.EntryAdapter;

    /**
     * Creates a plain object from an EntryAdapter message. Also converts values to other types if specified.
     * @param message EntryAdapter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.EntryAdapter,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this EntryAdapter to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a Sample. */
  interface ISample {
    /** Sample timestamp */
    timestamp?: number | Long | null;

    /** Sample value */
    value?: number | null;

    /** Sample hash */
    hash?: number | Long | null;
  }

  /** Represents a Sample. */
  class Sample implements ISample {
    /**
     * Constructs a new Sample.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISample);

    /** Sample timestamp. */
    public timestamp: number | Long;

    /** Sample value. */
    public value: number;

    /** Sample hash. */
    public hash: number | Long;

    /**
     * Creates a new Sample instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Sample instance
     */
    public static create(properties?: logproto.ISample): logproto.Sample;

    /**
     * Encodes the specified Sample message. Does not implicitly {@link logproto.Sample.verify|verify} messages.
     * @param message Sample message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISample,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Sample message, length delimited. Does not implicitly {@link logproto.Sample.verify|verify} messages.
     * @param message Sample message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISample,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Sample message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Sample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.Sample;

    /**
     * Decodes a Sample message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Sample
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.Sample;

    /**
     * Verifies a Sample message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a Sample message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Sample
     */
    public static fromObject(object: {[k: string]: any}): logproto.Sample;

    /**
     * Creates a plain object from a Sample message. Also converts values to other types if specified.
     * @param message Sample
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.Sample,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this Sample to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a Series. */
  interface ISeries {
    /** Series labels */
    labels?: string | null;

    /** Series samples */
    samples?: logproto.ISample[] | null;
  }

  /** Represents a Series. */
  class Series implements ISeries {
    /**
     * Constructs a new Series.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISeries);

    /** Series labels. */
    public labels: string;

    /** Series samples. */
    public samples: logproto.ISample[];

    /**
     * Creates a new Series instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Series instance
     */
    public static create(properties?: logproto.ISeries): logproto.Series;

    /**
     * Encodes the specified Series message. Does not implicitly {@link logproto.Series.verify|verify} messages.
     * @param message Series message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISeries,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Series message, length delimited. Does not implicitly {@link logproto.Series.verify|verify} messages.
     * @param message Series message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISeries,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Series message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Series
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.Series;

    /**
     * Decodes a Series message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Series
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.Series;

    /**
     * Verifies a Series message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a Series message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Series
     */
    public static fromObject(object: {[k: string]: any}): logproto.Series;

    /**
     * Creates a plain object from a Series message. Also converts values to other types if specified.
     * @param message Series
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.Series,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this Series to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TailRequest. */
  interface ITailRequest {
    /** TailRequest query */
    query?: string | null;

    /** TailRequest delayFor */
    delayFor?: number | null;

    /** TailRequest limit */
    limit?: number | null;

    /** TailRequest start */
    start?: google.protobuf.ITimestamp | null;
  }

  /** Represents a TailRequest. */
  class TailRequest implements ITailRequest {
    /**
     * Constructs a new TailRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITailRequest);

    /** TailRequest query. */
    public query: string;

    /** TailRequest delayFor. */
    public delayFor: number;

    /** TailRequest limit. */
    public limit: number;

    /** TailRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /**
     * Creates a new TailRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TailRequest instance
     */
    public static create(
      properties?: logproto.ITailRequest
    ): logproto.TailRequest;

    /**
     * Encodes the specified TailRequest message. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
     * @param message TailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITailRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TailRequest message, length delimited. Does not implicitly {@link logproto.TailRequest.verify|verify} messages.
     * @param message TailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITailRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TailRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TailRequest;

    /**
     * Decodes a TailRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TailRequest;

    /**
     * Verifies a TailRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TailRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TailRequest
     */
    public static fromObject(object: {[k: string]: any}): logproto.TailRequest;

    /**
     * Creates a plain object from a TailRequest message. Also converts values to other types if specified.
     * @param message TailRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TailRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TailRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TailResponse. */
  interface ITailResponse {
    /** TailResponse stream */
    stream?: logproto.IStreamAdapter | null;

    /** TailResponse droppedStreams */
    droppedStreams?: logproto.IDroppedStream[] | null;
  }

  /** Represents a TailResponse. */
  class TailResponse implements ITailResponse {
    /**
     * Constructs a new TailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITailResponse);

    /** TailResponse stream. */
    public stream?: logproto.IStreamAdapter | null;

    /** TailResponse droppedStreams. */
    public droppedStreams: logproto.IDroppedStream[];

    /**
     * Creates a new TailResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TailResponse instance
     */
    public static create(
      properties?: logproto.ITailResponse
    ): logproto.TailResponse;

    /**
     * Encodes the specified TailResponse message. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
     * @param message TailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITailResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TailResponse message, length delimited. Does not implicitly {@link logproto.TailResponse.verify|verify} messages.
     * @param message TailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITailResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TailResponse;

    /**
     * Decodes a TailResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TailResponse;

    /**
     * Verifies a TailResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TailResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TailResponse
     */
    public static fromObject(object: {[k: string]: any}): logproto.TailResponse;

    /**
     * Creates a plain object from a TailResponse message. Also converts values to other types if specified.
     * @param message TailResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TailResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TailResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a SeriesRequest. */
  interface ISeriesRequest {
    /** SeriesRequest start */
    start?: google.protobuf.ITimestamp | null;

    /** SeriesRequest end */
    end?: google.protobuf.ITimestamp | null;

    /** SeriesRequest groups */
    groups?: string[] | null;

    /** SeriesRequest shards */
    shards?: string[] | null;
  }

  /** Represents a SeriesRequest. */
  class SeriesRequest implements ISeriesRequest {
    /**
     * Constructs a new SeriesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISeriesRequest);

    /** SeriesRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /** SeriesRequest end. */
    public end?: google.protobuf.ITimestamp | null;

    /** SeriesRequest groups. */
    public groups: string[];

    /** SeriesRequest shards. */
    public shards: string[];

    /**
     * Creates a new SeriesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeriesRequest instance
     */
    public static create(
      properties?: logproto.ISeriesRequest
    ): logproto.SeriesRequest;

    /**
     * Encodes the specified SeriesRequest message. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
     * @param message SeriesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISeriesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SeriesRequest message, length delimited. Does not implicitly {@link logproto.SeriesRequest.verify|verify} messages.
     * @param message SeriesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISeriesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SeriesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SeriesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.SeriesRequest;

    /**
     * Decodes a SeriesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SeriesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.SeriesRequest;

    /**
     * Verifies a SeriesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a SeriesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SeriesRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.SeriesRequest;

    /**
     * Creates a plain object from a SeriesRequest message. Also converts values to other types if specified.
     * @param message SeriesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.SeriesRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this SeriesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a SeriesResponse. */
  interface ISeriesResponse {
    /** SeriesResponse series */
    series?: logproto.ISeriesIdentifier[] | null;
  }

  /** Represents a SeriesResponse. */
  class SeriesResponse implements ISeriesResponse {
    /**
     * Constructs a new SeriesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISeriesResponse);

    /** SeriesResponse series. */
    public series: logproto.ISeriesIdentifier[];

    /**
     * Creates a new SeriesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeriesResponse instance
     */
    public static create(
      properties?: logproto.ISeriesResponse
    ): logproto.SeriesResponse;

    /**
     * Encodes the specified SeriesResponse message. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
     * @param message SeriesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISeriesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SeriesResponse message, length delimited. Does not implicitly {@link logproto.SeriesResponse.verify|verify} messages.
     * @param message SeriesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISeriesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SeriesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SeriesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.SeriesResponse;

    /**
     * Decodes a SeriesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SeriesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.SeriesResponse;

    /**
     * Verifies a SeriesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a SeriesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SeriesResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.SeriesResponse;

    /**
     * Creates a plain object from a SeriesResponse message. Also converts values to other types if specified.
     * @param message SeriesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.SeriesResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this SeriesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a SeriesIdentifier. */
  interface ISeriesIdentifier {
    /** SeriesIdentifier labels */
    labels?: {[k: string]: string} | null;
  }

  /** Represents a SeriesIdentifier. */
  class SeriesIdentifier implements ISeriesIdentifier {
    /**
     * Constructs a new SeriesIdentifier.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ISeriesIdentifier);

    /** SeriesIdentifier labels. */
    public labels: {[k: string]: string};

    /**
     * Creates a new SeriesIdentifier instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SeriesIdentifier instance
     */
    public static create(
      properties?: logproto.ISeriesIdentifier
    ): logproto.SeriesIdentifier;

    /**
     * Encodes the specified SeriesIdentifier message. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
     * @param message SeriesIdentifier message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ISeriesIdentifier,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SeriesIdentifier message, length delimited. Does not implicitly {@link logproto.SeriesIdentifier.verify|verify} messages.
     * @param message SeriesIdentifier message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ISeriesIdentifier,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SeriesIdentifier message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SeriesIdentifier
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.SeriesIdentifier;

    /**
     * Decodes a SeriesIdentifier message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SeriesIdentifier
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.SeriesIdentifier;

    /**
     * Verifies a SeriesIdentifier message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a SeriesIdentifier message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SeriesIdentifier
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.SeriesIdentifier;

    /**
     * Creates a plain object from a SeriesIdentifier message. Also converts values to other types if specified.
     * @param message SeriesIdentifier
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.SeriesIdentifier,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this SeriesIdentifier to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a DroppedStream. */
  interface IDroppedStream {
    /** DroppedStream from */
    from?: google.protobuf.ITimestamp | null;

    /** DroppedStream to */
    to?: google.protobuf.ITimestamp | null;

    /** DroppedStream labels */
    labels?: string | null;
  }

  /** Represents a DroppedStream. */
  class DroppedStream implements IDroppedStream {
    /**
     * Constructs a new DroppedStream.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IDroppedStream);

    /** DroppedStream from. */
    public from?: google.protobuf.ITimestamp | null;

    /** DroppedStream to. */
    public to?: google.protobuf.ITimestamp | null;

    /** DroppedStream labels. */
    public labels: string;

    /**
     * Creates a new DroppedStream instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DroppedStream instance
     */
    public static create(
      properties?: logproto.IDroppedStream
    ): logproto.DroppedStream;

    /**
     * Encodes the specified DroppedStream message. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
     * @param message DroppedStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IDroppedStream,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DroppedStream message, length delimited. Does not implicitly {@link logproto.DroppedStream.verify|verify} messages.
     * @param message DroppedStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IDroppedStream,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DroppedStream message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DroppedStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.DroppedStream;

    /**
     * Decodes a DroppedStream message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DroppedStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.DroppedStream;

    /**
     * Verifies a DroppedStream message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a DroppedStream message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DroppedStream
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.DroppedStream;

    /**
     * Creates a plain object from a DroppedStream message. Also converts values to other types if specified.
     * @param message DroppedStream
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.DroppedStream,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this DroppedStream to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TimeSeriesChunk. */
  interface ITimeSeriesChunk {
    /** TimeSeriesChunk fromIngesterId */
    fromIngesterId?: string | null;

    /** TimeSeriesChunk userId */
    userId?: string | null;

    /** TimeSeriesChunk labels */
    labels?: logproto.ILabelPair[] | null;

    /** TimeSeriesChunk chunks */
    chunks?: logproto.IChunk[] | null;
  }

  /** Represents a TimeSeriesChunk. */
  class TimeSeriesChunk implements ITimeSeriesChunk {
    /**
     * Constructs a new TimeSeriesChunk.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITimeSeriesChunk);

    /** TimeSeriesChunk fromIngesterId. */
    public fromIngesterId: string;

    /** TimeSeriesChunk userId. */
    public userId: string;

    /** TimeSeriesChunk labels. */
    public labels: logproto.ILabelPair[];

    /** TimeSeriesChunk chunks. */
    public chunks: logproto.IChunk[];

    /**
     * Creates a new TimeSeriesChunk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeSeriesChunk instance
     */
    public static create(
      properties?: logproto.ITimeSeriesChunk
    ): logproto.TimeSeriesChunk;

    /**
     * Encodes the specified TimeSeriesChunk message. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
     * @param message TimeSeriesChunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITimeSeriesChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TimeSeriesChunk message, length delimited. Does not implicitly {@link logproto.TimeSeriesChunk.verify|verify} messages.
     * @param message TimeSeriesChunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITimeSeriesChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TimeSeriesChunk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeSeriesChunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TimeSeriesChunk;

    /**
     * Decodes a TimeSeriesChunk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeSeriesChunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TimeSeriesChunk;

    /**
     * Verifies a TimeSeriesChunk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TimeSeriesChunk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeSeriesChunk
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.TimeSeriesChunk;

    /**
     * Creates a plain object from a TimeSeriesChunk message. Also converts values to other types if specified.
     * @param message TimeSeriesChunk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TimeSeriesChunk,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TimeSeriesChunk to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a LabelPair. */
  interface ILabelPair {
    /** LabelPair name */
    name?: string | null;

    /** LabelPair value */
    value?: string | null;
  }

  /** Represents a LabelPair. */
  class LabelPair implements ILabelPair {
    /**
     * Constructs a new LabelPair.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ILabelPair);

    /** LabelPair name. */
    public name: string;

    /** LabelPair value. */
    public value: string;

    /**
     * Creates a new LabelPair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LabelPair instance
     */
    public static create(properties?: logproto.ILabelPair): logproto.LabelPair;

    /**
     * Encodes the specified LabelPair message. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
     * @param message LabelPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ILabelPair,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LabelPair message, length delimited. Does not implicitly {@link logproto.LabelPair.verify|verify} messages.
     * @param message LabelPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ILabelPair,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LabelPair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LabelPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.LabelPair;

    /**
     * Decodes a LabelPair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LabelPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.LabelPair;

    /**
     * Verifies a LabelPair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a LabelPair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LabelPair
     */
    public static fromObject(object: {[k: string]: any}): logproto.LabelPair;

    /**
     * Creates a plain object from a LabelPair message. Also converts values to other types if specified.
     * @param message LabelPair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.LabelPair,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this LabelPair to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a Chunk. */
  interface IChunk {
    /** Chunk data */
    data?: Uint8Array | null;
  }

  /** Represents a Chunk. */
  class Chunk implements IChunk {
    /**
     * Constructs a new Chunk.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IChunk);

    /** Chunk data. */
    public data: Uint8Array;

    /**
     * Creates a new Chunk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Chunk instance
     */
    public static create(properties?: logproto.IChunk): logproto.Chunk;

    /**
     * Encodes the specified Chunk message. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
     * @param message Chunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Chunk message, length delimited. Does not implicitly {@link logproto.Chunk.verify|verify} messages.
     * @param message Chunk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IChunk,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Chunk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Chunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.Chunk;

    /**
     * Decodes a Chunk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Chunk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.Chunk;

    /**
     * Verifies a Chunk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Chunk
     */
    public static fromObject(object: {[k: string]: any}): logproto.Chunk;

    /**
     * Creates a plain object from a Chunk message. Also converts values to other types if specified.
     * @param message Chunk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.Chunk,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this Chunk to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TransferChunksResponse. */
  interface ITransferChunksResponse {}

  /** Represents a TransferChunksResponse. */
  class TransferChunksResponse implements ITransferChunksResponse {
    /**
     * Constructs a new TransferChunksResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITransferChunksResponse);

    /**
     * Creates a new TransferChunksResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransferChunksResponse instance
     */
    public static create(
      properties?: logproto.ITransferChunksResponse
    ): logproto.TransferChunksResponse;

    /**
     * Encodes the specified TransferChunksResponse message. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
     * @param message TransferChunksResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITransferChunksResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TransferChunksResponse message, length delimited. Does not implicitly {@link logproto.TransferChunksResponse.verify|verify} messages.
     * @param message TransferChunksResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITransferChunksResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TransferChunksResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransferChunksResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TransferChunksResponse;

    /**
     * Decodes a TransferChunksResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransferChunksResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TransferChunksResponse;

    /**
     * Verifies a TransferChunksResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TransferChunksResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransferChunksResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.TransferChunksResponse;

    /**
     * Creates a plain object from a TransferChunksResponse message. Also converts values to other types if specified.
     * @param message TransferChunksResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TransferChunksResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TransferChunksResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TailersCountRequest. */
  interface ITailersCountRequest {}

  /** Represents a TailersCountRequest. */
  class TailersCountRequest implements ITailersCountRequest {
    /**
     * Constructs a new TailersCountRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITailersCountRequest);

    /**
     * Creates a new TailersCountRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TailersCountRequest instance
     */
    public static create(
      properties?: logproto.ITailersCountRequest
    ): logproto.TailersCountRequest;

    /**
     * Encodes the specified TailersCountRequest message. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
     * @param message TailersCountRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITailersCountRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TailersCountRequest message, length delimited. Does not implicitly {@link logproto.TailersCountRequest.verify|verify} messages.
     * @param message TailersCountRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITailersCountRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TailersCountRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TailersCountRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TailersCountRequest;

    /**
     * Decodes a TailersCountRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TailersCountRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TailersCountRequest;

    /**
     * Verifies a TailersCountRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TailersCountRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TailersCountRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.TailersCountRequest;

    /**
     * Creates a plain object from a TailersCountRequest message. Also converts values to other types if specified.
     * @param message TailersCountRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TailersCountRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TailersCountRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a TailersCountResponse. */
  interface ITailersCountResponse {
    /** TailersCountResponse count */
    count?: number | null;
  }

  /** Represents a TailersCountResponse. */
  class TailersCountResponse implements ITailersCountResponse {
    /**
     * Constructs a new TailersCountResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.ITailersCountResponse);

    /** TailersCountResponse count. */
    public count: number;

    /**
     * Creates a new TailersCountResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TailersCountResponse instance
     */
    public static create(
      properties?: logproto.ITailersCountResponse
    ): logproto.TailersCountResponse;

    /**
     * Encodes the specified TailersCountResponse message. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
     * @param message TailersCountResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.ITailersCountResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TailersCountResponse message, length delimited. Does not implicitly {@link logproto.TailersCountResponse.verify|verify} messages.
     * @param message TailersCountResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.ITailersCountResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TailersCountResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TailersCountResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.TailersCountResponse;

    /**
     * Decodes a TailersCountResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TailersCountResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.TailersCountResponse;

    /**
     * Verifies a TailersCountResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a TailersCountResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TailersCountResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.TailersCountResponse;

    /**
     * Creates a plain object from a TailersCountResponse message. Also converts values to other types if specified.
     * @param message TailersCountResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.TailersCountResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this TailersCountResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a GetChunkIDsRequest. */
  interface IGetChunkIDsRequest {
    /** GetChunkIDsRequest matchers */
    matchers?: string | null;

    /** GetChunkIDsRequest start */
    start?: google.protobuf.ITimestamp | null;

    /** GetChunkIDsRequest end */
    end?: google.protobuf.ITimestamp | null;
  }

  /** Represents a GetChunkIDsRequest. */
  class GetChunkIDsRequest implements IGetChunkIDsRequest {
    /**
     * Constructs a new GetChunkIDsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IGetChunkIDsRequest);

    /** GetChunkIDsRequest matchers. */
    public matchers: string;

    /** GetChunkIDsRequest start. */
    public start?: google.protobuf.ITimestamp | null;

    /** GetChunkIDsRequest end. */
    public end?: google.protobuf.ITimestamp | null;

    /**
     * Creates a new GetChunkIDsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetChunkIDsRequest instance
     */
    public static create(
      properties?: logproto.IGetChunkIDsRequest
    ): logproto.GetChunkIDsRequest;

    /**
     * Encodes the specified GetChunkIDsRequest message. Does not implicitly {@link logproto.GetChunkIDsRequest.verify|verify} messages.
     * @param message GetChunkIDsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IGetChunkIDsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetChunkIDsRequest message, length delimited. Does not implicitly {@link logproto.GetChunkIDsRequest.verify|verify} messages.
     * @param message GetChunkIDsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IGetChunkIDsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetChunkIDsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetChunkIDsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.GetChunkIDsRequest;

    /**
     * Decodes a GetChunkIDsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetChunkIDsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.GetChunkIDsRequest;

    /**
     * Verifies a GetChunkIDsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a GetChunkIDsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetChunkIDsRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.GetChunkIDsRequest;

    /**
     * Creates a plain object from a GetChunkIDsRequest message. Also converts values to other types if specified.
     * @param message GetChunkIDsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.GetChunkIDsRequest,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this GetChunkIDsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }

  /** Properties of a GetChunkIDsResponse. */
  interface IGetChunkIDsResponse {
    /** GetChunkIDsResponse chunkIDs */
    chunkIDs?: string[] | null;
  }

  /** Represents a GetChunkIDsResponse. */
  class GetChunkIDsResponse implements IGetChunkIDsResponse {
    /**
     * Constructs a new GetChunkIDsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: logproto.IGetChunkIDsResponse);

    /** GetChunkIDsResponse chunkIDs. */
    public chunkIDs: string[];

    /**
     * Creates a new GetChunkIDsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetChunkIDsResponse instance
     */
    public static create(
      properties?: logproto.IGetChunkIDsResponse
    ): logproto.GetChunkIDsResponse;

    /**
     * Encodes the specified GetChunkIDsResponse message. Does not implicitly {@link logproto.GetChunkIDsResponse.verify|verify} messages.
     * @param message GetChunkIDsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: logproto.IGetChunkIDsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetChunkIDsResponse message, length delimited. Does not implicitly {@link logproto.GetChunkIDsResponse.verify|verify} messages.
     * @param message GetChunkIDsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: logproto.IGetChunkIDsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetChunkIDsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetChunkIDsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): logproto.GetChunkIDsResponse;

    /**
     * Decodes a GetChunkIDsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetChunkIDsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): logproto.GetChunkIDsResponse;

    /**
     * Verifies a GetChunkIDsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: {[k: string]: any}): string | null;

    /**
     * Creates a GetChunkIDsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetChunkIDsResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): logproto.GetChunkIDsResponse;

    /**
     * Creates a plain object from a GetChunkIDsResponse message. Also converts values to other types if specified.
     * @param message GetChunkIDsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: logproto.GetChunkIDsResponse,
      options?: $protobuf.IConversionOptions
    ): {[k: string]: any};

    /**
     * Converts this GetChunkIDsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): {[k: string]: any};
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: number | Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: number | Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ITimestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ITimestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Timestamp;

      /**
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Timestamp;

      /**
       * Verifies a Timestamp message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: {[k: string]: any}): string | null;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Timestamp
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param message Timestamp
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Timestamp,
        options?: $protobuf.IConversionOptions
      ): {[k: string]: any};

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): {[k: string]: any};
    }
  }
}
