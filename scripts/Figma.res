module Request = {
  module type FigmaRequestType = {
    type endpointArgs
    let getEndpoint: endpointArgs => string

    type t
    let fromJson: Json.Decode.t<t>
  }

  exception ParseError

  module MakeFigmaRequest = (Request: FigmaRequestType) => {
    %%private(
      external toEndpointArgs: 'a => Request.endpointArgs = "%identity"

      let _request = url => {
        open Fetch
        open Promise

        let params = {
          "method": "get",
          "headers": {
            "x-figma-token": Env.figmaApiToken,
          },
        }

        fetch(url, params)
        ->then(Response.json)
        ->thenResolve(json => {
          json->Json.Decode.decodeValue(Request.fromJson)
        })
      }
    )

    let request = () => {
      URL.make(()->toEndpointArgs->Request.getEndpoint, "https://api.figma.com")
      ->URL.toString
      ->_request
    }

    let requestWithArgs = (args: Request.endpointArgs) => {
      open Fetch
      open Promise

      let url = URL.make(args->Request.getEndpoint, "https://api.figma.com")->URL.toString

      let params = {
        "method": "get",
        "headers": {
          "x-figma-token": Env.figmaApiToken,
        },
      }

      fetch(url, params)
      ->then(Response.json)
      ->thenResolve(json => {
        json->Json.Decode.decodeValue(Request.fromJson)
      })
    }
  }

  module QueryComponentsOrInstancesType = {
    type endpointArgs = unit
    let getEndpoint = () => "/v1/files/" ++ Env.figmaFileId ++ "/nodes?ids=" ++ Env.figmaIconFrameId

    type component = Icon.component
    type node = {components: Js.Dict.t<component>}
    type t = {nodes: Js.Dict.t<node>}

    let fromJson: Json.Decode.t<t> = {
      open Json.Decode

      let component: Json.Decode.t<component> = {
        map(field("name", string), ~f=name => {
          let parsed: component = {
            name: name,
          }

          parsed
        })
      }

      let node = {
        map(field("components", dict(component)), ~f=components => {
          components: components,
        })
      }

      map(field("nodes", dict(node)), ~f=nodes => {
        nodes: nodes,
      })
    }
  }

  module QueryComponentsOrInstances = MakeFigmaRequest(QueryComponentsOrInstancesType)

  module QueryImagesType = {
    type endpointArgs = Array.t<Icon.t>
    let getEndpoint = icons => {
      let ids =
        icons->Js.Array2.map(((id, _)) => id)->Js.Array2.joinWith(",")->Js.Global.encodeURIComponent

      "/v1/images/" ++ Env.figmaFileId ++ "?ids=" ++ ids ++ "&format=svg"
    }

    type t = {images: Js.Dict.t<String.t>}
    let fromJson: Json.Decode.t<t> = {
      open Json.Decode

      map(field("images", dict(string)), ~f=images => {
        images: images,
      })
    }
  }

  module QueryImages = MakeFigmaRequest(QueryImagesType)
}
