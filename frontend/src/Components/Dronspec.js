import Table from 'react-bootstrap/Table';
import React from 'react';

export function Dronspec({data}){
    return (
        <Table bordered hover size="sm" variant="dark" style={{width: '50%', marginTop: '50px'}}>
          <thead>
            <tr>
              <td>1</td>
              <td>Бренд</td>
              <td>{data.brand}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Видеопередача</td>
              <td>{data.video_transmission}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Питание</td>
              <td>{data.powering}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Протокол приёмника</td>
              <td>{data.transmitter_protocol}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Размер пропеллеров</td>
              <td>{data.propeller_size}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Размер рамы (мм)</td>
              <td>{data.frame_size}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Разъём питания</td>
              <td>{data.power_connector}</td>
            </tr>
          </tbody>
        </Table>
      );
}