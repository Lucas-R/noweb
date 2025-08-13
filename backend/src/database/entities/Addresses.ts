import { AddressProps } from "@schemas/AddressSchema";
import { Entity, PrimaryColumn, Column, BeforeInsert, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ulid } from "ulid";

@Entity("addresses")
export class Address implements AddressProps {
  @PrimaryColumn({ type: "varchar" })
  id!: string;

  @Column({ type: "varchar" })
  zipcode!: string;

  @Column({ type: "varchar" })
  publicPlace!: string;

  @Column({ type: "varchar" })
  neighborhood!: string;

  @Column({ type: "int", nullable: true })
  number?: number;

  @Column({ type: "varchar" })
  uf!: string;

  @Column({ type: "varchar" })
  state!: string;

  @Column({ type: "varchar", nullable: true })
  complement?: string;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at?: Date;

  @BeforeInsert()
  generateId() {
    this.id = ulid();
  }
}