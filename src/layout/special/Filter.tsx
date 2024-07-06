import { memo, useState } from "react";
import type { Genre } from "../../movies/models/IMovie.model";
import { Button, Checkbox, Dropdown } from "flowbite-react";

type FilterProps = {
	genres: Genre[];
	onFilter: (IDs: number[]) => void;
	selectedOptions: number[];
	setSelectedOptions: (IDs: number[]) => void;
};

const Filter = ({
	genres,
	onFilter,
	selectedOptions,
	setSelectedOptions,
}: FilterProps) => {
	const handleSelect = (option: Genre) => {
		if (selectedOptions.includes(option.id)) {
			setSelectedOptions(selectedOptions.filter((item) => item !== option.id));
		} else {
			setSelectedOptions([...selectedOptions, option.id]);
		}
	};
	return (
		<Dropdown
			label="Filter by Genre"
			dismissOnClick={false}
			className="h-52 overflow-auto scroll"
		>
			<Dropdown.Item onClick={onFilter} className="sticky top-0">
				<Button>Apply Filter</Button>
			</Dropdown.Item>
			<Dropdown.Divider />
			{genres.map((genre) => (
				<Dropdown.Item key={genre.id} onClick={() => handleSelect(genre)}>
					<Checkbox
						id={genre.id.toString()}
						value={genre.name}
						onChange={() => handleSelect(genre)}
						checked={selectedOptions.includes(genre.id)}
						className="mr-2"
					/>
					{genre.name}
				</Dropdown.Item>
			))}
			<Dropdown.Divider />
			<Dropdown.Item>
				<Button onClick={() => onFilter(selectedOptions)}>Apply Filter</Button>
			</Dropdown.Item>
		</Dropdown>
	);
};

export default memo(Filter);
