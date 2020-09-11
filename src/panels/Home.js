import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Cal from '@vkontakte/icons/dist/28/calendar_outline';
import Tar from '@vkontakte/icons/dist/28/hashtag_outline';
import Arrow from '@vkontakte/icons/dist/28/arrow_up_outline';
import { View, PanelHeaderBack, PanelHeaderButton, Input, Radio, Textarea, InfoRow, Progress } from '@vkontakte/vkui';
import './Home.css';


//let [ selfService, setSelfService ] = useState(localStorage.kfc === 'true');

const Home = () => {
	let [view, setView] = useState('donates');
	let [disable, setDisable] = useState(true);
	let [data, setData] = useState({});
	return (
		<Root activeView={view}>
			<View id="donates">
				<Panel>
					<PanelHeader right={<Avatar size={36}></Avatar>}> Пожертвования </PanelHeader>
					<Div align="center"> 
						<Group>
							<Text className="center">У вас пока нет сборов. <br/>Начните доброе дело. <br/><br/></Text>
							<Button onClick={() => {
								setView('choose');
							}}>Создать сбор</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="choose">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('donates')}></PanelHeaderBack>}>
						Тип сбора
					</PanelHeader>
					<Div align="center">
						<Group>
							<Button before={<Tar></Tar>} onClick={() => setView('target')} size="xl" mode="secondary" right={<Text></Text>}>
								<Title level="3" weight="regular" style={{color: 'black', textAlign: 'left'}}>Целевой сбор</Title>
								<Text weight="regular" style={{color: 'black', textAlign: 'left'}}>Когда есть определенная цель</Text>
							</Button>
							<br></br>
							<br></br>
							<Button before={<Cal></Cal>} onClick={() => setView('monthly')} size="xl" mode="secondary">
								<Title level="3" weight="regular" style={{color: 'black', textAlign: 'left'}}>Регулярный сбор</Title>
								<Text weight="regular" style={{color: 'black', textAlign: 'left'}}>Если нужна помощь ежемесячно</Text>
							</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="target">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('choose')}></PanelHeaderBack>}>
						Целевой сбор
					</PanelHeader>
					<Div align="center">
						<Group>
							<Text weight="regular">Название сбора</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Сумма</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Цель</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Описание</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Куда получать деньги</Text>
							<Select>
								<option> Счет VK Pay 1234</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => setView('target-dop')}>Далее</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="monthly">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('choose')}></PanelHeaderBack>}>
						Регулярный сбор
					</PanelHeader>
					<Div align="center">
						<Group>
							<Text weight="regular">Название сбора</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Сумма в месяц</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Цель</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Описание</Text>
							<Input type="text"></Input>
							<br/>
							<Text weight="regular">Куда получать деньги</Text>
							<Select>
								<option> Счет VK Pay 1234</option>
							</Select>
							<br></br>
							<Text weight="regular">Автор</Text>
							<Select>
								<option>Вася Пупкин</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => setView('montly-dop')}>Далее</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="target-dop">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('target')}></PanelHeaderBack>}>
						Дополнительно
					</PanelHeader>
					<Div align="center">
						<Group>
							<Text weight="regular">Автор</Text>
							<Select>
								<option>Вася Пупкин</option>
							</Select>
							<br></br>
							<Text weight="regular">Сбор завершится</Text>
							<Radio onClick={() => setDisable(true)}>Когда соберем сумму</Radio>
							<Radio onClick={() => setDisable(false)} >В определенную дату</Radio>
							<br></br>
							<Text weight="regular">Дата окончания</Text>
							<Select>
								<option>12 сентября</option>
								<option>12 октября</option>
								<option>12 ноября</option>
								<option>12 декабря</option>
								<option>1 января</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => setView('target-end')}>Далее</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="target-end">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('target-dop')}
						right={<PanelHeaderButton before={<Arrow></Arrow>} onClick={() => setView('createTarget')}></PanelHeaderButton>}
					></PanelHeaderBack>}>
						Вася
					</PanelHeader>
					<Div align="center">
						<Group>
							<Textarea></Textarea>
							<br></br>
							<Text weight="regular">Добряши помогают котикам</Text>
							<Group >
								<InfoRow header="Прогресс">
									<Progress value={0}></Progress>
								</InfoRow>
								<Button mode="commerce">Помочь</Button>
							</Group>
							<br></br>
						</Group>
					</Div>
				</Panel>
			</View>
		</Root>
		
	);
}

export default Home;
