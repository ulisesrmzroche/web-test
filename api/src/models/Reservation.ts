import {
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    PrimaryKey, Table,
    UpdatedAt
  } from 'sequelize-typescript'
  
  @Table({ tableName: 'reservations' })
  export class Reservation extends Model<Reservation> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    name: string
  
    @Column
    email: string
  
    @Column
    partySize: string

    @Column
    reservation_date: string

    @Column
    reservation_time: string

    @DeletedAt
    deleted_at: string
  
    @CreatedAt
    created_at: string
  
    @UpdatedAt
    updated_at: string
  }
  