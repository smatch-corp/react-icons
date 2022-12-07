module Response = {
  type t

  @send external json: t => Promise.t<Js.Json.t> = "json"

  @send external text: t => Promise.t<String.t> = "text"
}

@module("isomorphic-fetch")
external fetch: (string, 'params) => Promise.t<Response.t> = "default"
