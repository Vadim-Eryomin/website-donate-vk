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
import Cam from '@vkontakte/icons/dist/28/camera_outline';
import Bell from '@vkontakte/icons/dist/28/message';
import Arrow from '@vkontakte/icons/dist/28/arrow_up_outline';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Caption from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import { View, PanelHeaderBack, PanelHeaderButton, Input, Radio, Textarea, InfoRow, Progress, PanelHeaderSubmit, PanelHeaderContent } from '@vkontakte/vkui';
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
							<Input type="text" id="name"></Input>
							<br/>
							<Text weight="regular">Сумма</Text>
							<Input type="text" id="sum"></Input>
							<br/>
							<Text weight="regular">Цель</Text>
							<Input type="text" id="tar"></Input>
							<br/>
							<Text weight="regular">Описание</Text>
							<Input type="text" id="def"></Input>
							<br/>
							<Text weight="regular">Куда получать деньги</Text>
							<Select id="bank">
								<option val="Счет VK Pay 1234"> Счет VK Pay 1234</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => {
								let name = document.getElementById('name');
								let sum = document.getElementById('sum');
								let tar = document.getElementById('tar');
								let def = document.getElementById('def');
								let bank = document.getElementById('bank');
								setData(Object.assign(data, {
									'name': name.value,
									'sum': sum.value,
									'tar': tar.value,
									'def': def.value,
									'bank': bank.value
								}));
								setView('target-dop');
							}}>Далее</Button>
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
							<Input type="text" id="name"></Input>
							<br/>
							<Text weight="regular">Сумма в месяц</Text>
							<Input type="text" id="sum"></Input>
							<br/>
							<Text weight="regular">Цель</Text>
							<Input type="text" id="tar"></Input>
							<br/>
							<Text weight="regular">Описание</Text>
							<Input type="text" id="def"></Input>
							<br/>
							<Text weight="regular">Куда получать деньги</Text>
							<Select id="bank">
								<option value="Счет VK Pay 1234"> Счет VK Pay 1234</option>
							</Select>
							<br></br>
							<Text weight="regular">Автор</Text>
							<Select id="auth">
								<option value="Вася Пупкин">Вася Пупкин</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => {
								let name = document.getElementById("name");
								let sum = document.getElementById("sum");
								let def = document.getElementById("def");
								let tar = document.getElementById("tar");
								let bank = document.getElementById("bank");
								let auth = document.getElementById("auth");
								setData(Object.assign(data, {
									'name': name.value,
									'sum': sum.value,
									'def': def.value,
									'tar': tar.value,
									'bank': bank.value,
									'auth': auth.value
								}));
								setView('monthly-end');
							}}>Далее</Button>
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
							<Select id="auth">
								<option value="Вася Пупкин">Вася Пупкин</option>
							</Select>
							<br></br>
							<Text weight="regular">Сбор завершится</Text>
							<Radio checked={true} name="rad" onClick={() => setDisable(true)}>Когда соберем сумму</Radio>
							<Radio name="rad" onClick={() => setDisable(false)} >В определенную дату</Radio>			
							<br></br>
							<Text weight="regular">Дата окончания</Text>
							<Select id="date">
								<option value="12 сентября">12 сентября</option>
								<option value="12 октября">12 октября</option>
								<option value="12 ноября">12 ноября</option>
								<option value="12 декабря">12 декабря</option>
								<option value="1 января">1 января</option>
							</Select>
							<br></br>
							<Button size="xl" onClick={() => {
								let auth = document.getElementById('auth');
								let rad = document.getElementsByName('rad')[0].checked === true;
								let date = document.getElementById('date');
								setData(Object.assign(data, {
									'auth': auth.value,
									'rad': rad,
									'date': date.value
								}));
								window.data = data;
								setView('target-end');
							}}>Далее</Button>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="target-end">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('target-dop')}></PanelHeaderBack>}
								right={<PanelHeaderSubmit onClick={() => {
									let postdef = document.getElementById('postdef');
									setData(Object.assign(data, {
										'postdef': postdef.value
									}));
									window.data = data;
									setView('createTarget');
								}}></PanelHeaderSubmit>}>
						Вася
					</PanelHeader>
					<Div align="center">
						<Group>
							<Textarea id="postdef"></Textarea>
							<br></br>
							<Text weight="regular">Добряши помогают котикам</Text>
							<Group>
								<InfoRow header="Прогресс">
									<Text weight="regular">Помогите первым!</Text>
									<br></br>
									<Progress value={0}></Progress>
									<br></br>
									<Button mode="outline" disabled={true}>Помочь</Button>
								</InfoRow>
							</Group>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="monthly-end">
				<Panel>					
					<PanelHeader left={<PanelHeaderBack onClick={() => setView('target-dop')}></PanelHeaderBack>}
							right={<PanelHeaderSubmit onClick={() => { 
								let postdef = document.getElementById('postdef');
								setData(Object.assign(data, {
									'postdef': postdef.value
								}));
								window.data = data;
								setView('createTarget');
							}}></PanelHeaderSubmit>}>
						Вася
					</PanelHeader>
					<Div align="center">
						<Group>
							<Textarea id="postdef"></Textarea>
							<br></br>
							<Text weight="regular">Добряши помогают котикам</Text>
							<Group>
								<InfoRow header="Прогресс">
									<Text weight="regular">Помогите первым!</Text>
									<br></br>
									<Progress value={0}></Progress>
									<br></br>
									<Button mode="outline" disabled={true}>Помочь</Button>
								</InfoRow>
							</Group>
						</Group>
					</Div>
				</Panel>
			</View>
			<View id="createTarget">
				<Panel>					
					<PanelHeader left={<Cam></Cam>}
							right={<Bell></Bell>}>
						Новости
					</PanelHeader>
					<Div align="center">
						<Card mode="outline" size="l">
							<Div>
								<Text>Вася Пупкин</Text>
								<Caption level="3" weight="regular">час назад</Caption>
							</Div>
							<br></br>
							<Div>
								<Text>{data.postdef}</Text>
							</Div>
							<br></br>
							<Card size="l">
								<Div>
									<Title>{data.name}</Title>
									<br></br>
									<Caption level="1">{data.auth} {data.date !== undefined ? data.date : "Помощь нужна каждый месяц"}</Caption>
									<br></br>
									<InfoRow>
										<Progress style={{textAlign: 'left'}} value={75}></Progress>
										<br></br>
										<Button mode="outline"> Помочь</Button>
									</InfoRow>
								</Div>
							</Card>
						</Card>
					</Div>
				</Panel>
			</View>
		</Root>
		
	);
}

export default Home;
