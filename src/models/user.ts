import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
} from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true,
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    roleId!: number;
}