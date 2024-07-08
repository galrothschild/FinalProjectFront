export default function capitalizeString(string: string): string {
	const words = string.split(" ");
	return words.map((word) => capitalize(word)).join(" ");
}
const capitalize = (word: string): string => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};
