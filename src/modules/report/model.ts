import { ReportType } from "modules/reportType";
import { Shop } from "modules/shop";
import { User } from "modules/user";

export class Report {
  public id!: string;
  public name!: string;
  public description!: string;
  public user_id!: string;
  public report_type_id!: string;
  public shop_id!: string;
  public created_at!: string;
  public updated_at!: string;
  public status!: string;
  public is_active!: boolean;
  public complaint_image: any = [];

  public user: User = new User();
  public shop: Shop = new Shop();
  public report_type: ReportType = new ReportType();
}
