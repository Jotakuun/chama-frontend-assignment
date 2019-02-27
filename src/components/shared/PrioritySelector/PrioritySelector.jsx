import React from 'react';
import { Select, MenuItem, FormControl, Icon } from '@material-ui/core';

import styles from './PrioritySelector.module.scss';

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
					<Icon color="inherit" className={styles.Priority__Level__1}>
						<MoodBad />
					</Icon>
				</MenuItem>
				<MenuItem value={2}>
					<Icon color="inherit" className={styles.Priority__Level__2}>
						<SentimentVeryDissatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={3}>
					<Icon color="inherit" className={styles.Priority__Level__3}>
						<SentimentDissatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={4}>
					<Icon color="inherit" className={styles.Priority__Level__4}>
						<SentimentSatisfied />
					</Icon>
				</MenuItem>
				<MenuItem value={5}>
					<Icon color="inherit" className={styles.Priority__Level__5}>
						<Mood />
					</Icon>
				</MenuItem>
			</Select>
		</FormControl>
	);
}
export default PrioritySelector;
