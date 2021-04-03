import a from './a.wav'
import b from './b.wav'
import c2 from './c2.wav'
import c from './c.wav'
import d1 from './d1.wav'
import e1 from './e1.wav'
import f from './f.wav'
import g from './g.wav'

// To play a note, for example, the first one
// new Audio(notes[0].file).play();

const notes = [
	{
		name: 'c',
		file: c,
		color: '#f71919',
	},
	{
		name: 'd1',
		file: d1,
		color: '#fc7b03',
	},
	{
		name: 'e1',
		file: e1,
		color: '#9c5e0c',
	},
	{
		name: 'f',
		file: f,
		color: 'green',
	},
	{
		name: 'g',
		file: g,
		color: 'blue',
	},
	{
		name: 'a',
		file: a,
		color: 'purple',
	},
	{
		name: 'b',
		file: b,
		color: '#f03c72',
	},
	{
		name: 'c2',
		file: c2,
		color: 'orange',
	},
]

export default notes
