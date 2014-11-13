function HomeCtrl($scope) {
    $scope.name = '基本设定';
    $scope.description = "简要介绍，以及如何、使用等等。";
    $scope.items = [
        {
            title: '概览',
            hash: 'overview',
            description: '核心部分，以及一些配置信息。',
            children: [
                {
                    title: 'HTML5 文档类型',
                    hash: 'html5',
                    description: '我们使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。',
                    code: '<!DOCTYPE html>\r\n<html lang="zh-CN">\r\n...\r\n</html>'
                },
                {
                    title: '移动设备优先',
                    hash: 'mobile-first',
                    description: '为了确保适当的绘制和触屏缩放，需要在 <head> 之中添加 viewport 元数据标签。',
                    code: '<meta name="viewport" content="width=device-width, initial-scale=1">'
                }
            ]
        },
        {
            title: '包含的内容',
            hash: 'include',
            description: 'Bootstrap 提供了两种形式的压缩包，在下载下来的压缩包内可以看到以下目录和文件，这些文件按照类别放到了不同的目录内，并且提供了压缩与未压缩两种版本。',
            info: {
                title: 'Bootstrap 插件全部依赖 jQuery',
                message: '请注意，Bootstrap 的所有 JavaScript 插件都依赖 jQuery，因此 jQuery 必须在 Bootstrap 之前引入，就像在基本模版中所展示的一样。在 bower.json 文件中 列出了 Bootstrap 所支持的 jQuery 版本。'
            }
        }
    ];
}

