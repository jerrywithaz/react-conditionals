import { ConditionalElement, ConditionalOptions } from "src/types";

export type RenderProps<Data> = ConditionalElement<Data> & ConditionalOptions<Data>;