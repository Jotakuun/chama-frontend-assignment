import React from 'react';
import { Select, MenuItem, FormControl, Icon } from '@material-ui/core';

import MoodBad from '@material-ui/icons/MoodBad';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import Mood from '@material-ui/icons/Mood';


function PrioritySelector(props) {
	return (
		<FormControl>
			<Select
				disableUnderline
				value={props.value}
				onChange={(event) => props.onChange(event.target.value)}
			>
				<MenuItem value={1}>
					<Icon>
						<MoodBad />
					</Icon>
				</MenuItem>
				<MenuItem value={2}>
					<Icon>
						<SentimentVeryDissatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={3}>
					<Icon>
						<SentimentDissatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={4}>
					<Icon>
						<SentimentSatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={5}>
					<Icon>
						<Mood />
					</Icon>
				</MenuItem>
			</Select>
		</FormControl>
	);
}
export default PrioritySelector;
