import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Reservation } from '../models/Reservation'

@Controller('reservations')
export class ReservationsController {
  @Post()
  private async add(req: Request, res: Response) {
    try {
      const reservation = await Reservation.create(req.body)
      return res.status(201).json(reservation)
    } catch (e) {
      return res.sendStatus(400)
    }
  }
}
