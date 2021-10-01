using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.Enums
{
    public enum BillStatus
    {
        [Description("Tạo mới")]
        New,
            [Description("Đang xử lý")]
        InProgress,
            [Description("Trả lại")]
        Returned,
            [Description("Hủy bỏ")]
        Cancelled,
            [Description("Hoàn thành")]
        Completed
    }
}
