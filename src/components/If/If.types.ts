import { ConditionalOptions, ConditionalElement } from "../../types";

export type IfProps<Data = any> = ConditionalOptions<Data> & ConditionalElement<Data>;