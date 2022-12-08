import React from 'react'

interface Props {
	t: (key: string) => string
	data: any
}

export const PersonDescription: React.FC<Props> = ({ t, data }) => {
	const { death, growth, age, countAwards, sex, birthday, birthPlace, deathPlace, profession } = data

	const professionValue = profession && profession.map(({ value }: any) => value).join(', ')
	const birthdayValue = birthday && new Date(birthday).toISOString().slice(0, 10).replace(/-/g, '')
	const birthPlaceValue = birthPlace && birthPlace.map((place: any) => place.value).join(', ')
	const deathPlaceValue = deathPlace && deathPlace.map((place: any) => place.value).join(', ')

	const descriptionItems: any[] = [
		{ field: t('Age'), value: age },
		{ field: t('Gender'), value: sex },
		{ field: t('Growth'), value: growth },
		{ field: t('Awards count'), value: countAwards },
		{ field: t('Profession'), value: professionValue },
		{ field: t('Birthday'), value: birthdayValue },
		{ field: t('Birthplace'), value: birthPlaceValue },
		{ field: t('Date of death'), value: death },
		{ field: t('Place of death'), value: deathPlaceValue }
	]

	return (
		<>
			<h2 className="mb-5 text-3xl font-bold dark:text-zinc-300">{t('About person')}</h2>
			<ul className="container">
				{descriptionItems.map((item) => (
					<div className="p-2" key={item.field}>
						<li className="flex items-center">
							<span
								className="block text-gray-500 dark:text-zinc-300 md:text-2xl"
								style={{ flex: '0 0 200px' }}>
								{item.field}
							</span>
							<span className="relative text-gray-800 dark:text-zinc-400 md:text-2xl">
								{item.value || ''}
							</span>
						</li>
					</div>
				))}
			</ul>
		</>
	)
}
