import Image from 'next/image';
import React from 'react';
import { School, SchoolList } from '../../../repositories/schoolList';
import styles from './CompareTable.module.css';

const Row = ({school}: { school: School}) => {
  const skills = (
    <>
    {school.skills.map((skill, index) => {
      return <React.Fragment key={index}>{skill}<br/></React.Fragment>;
    })}
    </>
  );

  const prices = school.courses.map(course => course.price);
  const price = (
    <>
      {Math.min(...prices)}円 ~ {Math.max(...prices)}円
    </>
  );

  return (
    <tr>
      <th><Image src={school.thumbnail} width={70} height={70}/><br/>{school.name}</th>
      <td>{skills}</td>
      <td>{price}</td>
      <td></td>
    </tr>
  );
}

const CompareTable = ({schools}: {schools: SchoolList}) => {
  const keys = Object.keys(schools);
  return (
    <div className={styles.root}>
      <h2 className={styles.h2}>比較表</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>スクール</th>
            <th>スキル</th>
            <th>価格</th>
            <th>期間</th>
          </tr>
        </thead>
        <tbody>
          {keys.map(key => <Row school={schools[key]}/>)}
          <tr>
            <th>No.1</th>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareTable;