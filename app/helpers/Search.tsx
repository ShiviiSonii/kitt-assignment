import * as React from "react"
import {data} from "../data/data"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchHelper(props : any) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            data.airports.map((airport) => <SelectItem value="apple">{airport.name}</SelectItem>)
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
