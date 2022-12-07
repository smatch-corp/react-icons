type t

@new
external make: (string, string) => t = "URL"

@send external toString: t => string = "toString"
