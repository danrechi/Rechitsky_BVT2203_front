import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);
    const [filteredVacancies, setFilteredVacancies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [experience, setExperience] = useState("Не имеет значения");
    const [employment, setEmployment] = useState("Не имеет значения");
    const [schedule, setSchedule] = useState("Не имеет значения");

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const response = await axios.get('http://localhost:8000/vacancies/');
                setVacancies(response.data);
                setFilteredVacancies(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchVacancies();
    }, []);

    useEffect(() => {
        const results = vacancies.filter(vacancy =>
            vacancy.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (experience === "Не имеет значения" || vacancy.experience === experience) &&
            (employment === "Не имеет значения" || vacancy.employment === employment) &&
            (schedule === "Не имеет значения" || vacancy.schedule === schedule)
        );
        setFilteredVacancies(results);
    }, [searchTerm, experience, employment, schedule, vacancies]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки вакансий: {error.message}</p>;

    return (
        <div>
            <h1>Найденные вакансии</h1>
            <input 
                type="text" 
                placeholder="Поиск" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                <option value="Не имеет значения">Выберите опыт работы</option>
                <option value="Нет опыта">Нет опыта</option>
                <option value="От 1 года до 3 лет">От 1 года до 3 лет</option>
                <option value="От 3 до 6 лет">От 3 до 6 лет</option>
                <option value="Более 6 лет">Более 6 лет</option>
            </select>
            <select value={employment} onChange={(e) => setEmployment(e.target.value)}>
                <option value="Не имеет значения">Выберите тип занятости</option>
                <option value="Полная занятость">Полная занятость</option>
                <option value="Частичная занятость">Частичная занятость</option>
                <option value="Стажировка">Стажировка</option>
                <option value="Проектная работа">Проектная работа</option>
                <option value="Волонтерство">Волонтерство</option>
                <option value="Оформление по ГПХ или по совместительству">Оформление по ГПХ или по совместительству</option>
            </select>
            <select value={schedule} onChange={(e) => setSchedule(e.target.value)}>
                <option value="Не имеет значения">Выберите график работы</option>
                <option value="Полный день">Полный день</option>
                <option value="Удаленная работа">Удаленная работа</option>
                <option value="Гибкий график">Гибкий график</option>
                <option value="Сменный график">Сменный график</option>
                <option value="Вахтовый метод">Вахтовый метод</option>
            </select>
            <ul>
                {filteredVacancies.map(vacancy => (
                    <li key={vacancy.id}>
                        <h2>{vacancy.name}</h2>
                        <p>Город: {vacancy.city}</p>
                        <p>Занятость: {vacancy.employment}</p>
                        <p>Опыт работы: {vacancy.experience}</p>
                        <p>График работы: {vacancy.schedule}</p>
                        <p>Зарплата: {(vacancy.salary === null || vacancy.salary === "-") ? "не указана" : vacancy.salary+" "+vacancy.salary_curr}</p>
                        <p><a href={vacancy.url}>Ссылка на вакансию</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vacancies;
