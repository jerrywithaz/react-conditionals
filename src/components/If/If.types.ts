import { ConditionalOptions, ConditionalElement } from "src/types";

export type IfProps<Data> = ConditionalOptions<Data> & ConditionalElement<Data>;