import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Inventory } from '../models/Inventory'

@Controller('inventories')
export class InventoriesController {
  @Post()
  private async add(req: Request, res: Response) {
    const { morningReservations, afternoonReservations, eveningReservations } = req.body
    try {
      const inventory = await Inventory.create({
        morning_reservations_count: morningReservations,
        afternoon_reservations_count: afternoonReservations,
        evening_reservations_count: eveningReservations,
      })
      return res.status(201).json(inventory)
    } catch (e) {
      return res.sendStatus(400)
    }
  }
}
