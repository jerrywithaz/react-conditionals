import { ConditionalElement, ConditionalOptions } from "../../types";

export type RenderProps<Data = any> = ConditionalElement<Data> & ConditionalOptions<Data>;