import { Controller, Post, Get } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Inventory } from '../models/Inventory'

@Controller('inventories')
export class InventoriesController {
  @Post('')
  private async add(req: Request, res: Response) {
    try {
      const inventory = await Inventory.create(req.body)
      return res.status(201).json(inventory)
    } catch (e) {
      return res.sendStatus(400)
    }
  }
  
  // GET '/inventories
  @Get('')
  private async getAll(req: Request, res: Response) {
    try {
      if (req.params.date === 'today') {
        const inventory = await Inventory.findOne({
          where: { created_at: {
            $gt: new Date().setHours(0, 0, 0, 0),
            $lt: new Date()
          }}
        })
        return res.status(200).json({
          inventory,
        })
      }

      const inventories = await Inventory.findAll();
      return res.status(200).json({
        inventories,
      })
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}
