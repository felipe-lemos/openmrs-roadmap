import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";

registerBlockType("openmrs/roadmap", {
	edit: Edit,
	save: Save,
});
