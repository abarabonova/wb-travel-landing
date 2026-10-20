# web-setup

Репозиторий для дизайнеров: здесь можно быстро собирать и проверять интерактивные прототипы с помощью Cursor и `@mo/ui`.

## Начало работы

Перед началом убедитесь, что установлены Node.js 22–24 и npm 10 или новее:

```bash
node --version
npm --version
```

Склонируйте репозиторий и установите зависимости:

```bash
git clone git@gitlab.wildberries.ru:wasabi/ds/web-setup.git
cd web-setup
# .npmrc уже содержит registry для @mo/ui
npm ci
```

Запустите прототип локально:

```bash
npm run dev
```

Vite выведет в терминал локальный адрес, обычно `http://localhost:5173`. Откройте его в браузере; изменения в `src/` будут обновляться автоматически.

## Работа над прототипом

1. Перед началом работы обновите основную ветку и создайте свою ветку:

   ```bash
   git switch main
   git pull
   git switch -c feature-short-prototype-name
   ```

   Используйте понятное имя в формате `feature-краткое-описание` — например, `feature-profile-onboarding`.

2. Обсудите с агентом задачу, внесите изменения в `src/` и проверяйте результат в браузере.
3. Перед отправкой работы убедитесь, что проект собирается:

   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```

4. Сохраните изменения, отправьте ветку и создайте Merge Request:

   ```bash
   git add src
   git commit -m "Добавить прототип онбординга"
   git push -u origin feature-short-prototype-name
   ```

Не работайте напрямую в `main` и не добавляйте в репозиторий пароли, токены или файлы `.env`.

## История работы с агентом

Мы будем благодарны, если после завершения заметной итерации вы экспортируете историю чата с агентом Cursor и приложите её к задаче или Merge Request. Это помогает понять принятые решения, продолжить работу другому человеку и повторно использовать удачные подходы.

Перед публикацией проверьте выгрузку: в ней не должно быть токенов, паролей, персональных данных или другой чувствительной информации.

## Деплой

Происходит автоматически после пуша
main ветка http://web-setup.ds.k8s.dev-du/
фича ветка http://web-setup-feature-profile-onboarding.ds.k8s.dev-du/

## Стек

- React 19 + TypeScript + Vite
- `@mo/ui`
- GitLab CI: `pipelines/js-ts.yml` + `CI_TMPL_DEVELOPMENT_FLOW: TBD`
- Deploy: Per Cluster (`deploy/k8s.*` + `docker/`)

## Команды

| команда | описание |
| --- | --- |
| `npm run dev` | dev-сервер |
| `npm run build` | production-сборка |
| `npm run lint` | eslint |
| `npm run typecheck` | tsc |

## CI/CD

Пайплайн подключён из `devops/ci/templates` (`v4.7.0`).

**TBD:**

- `main` → автодеплой в DEV (`k8s.dev-du`)
- `feature-*` → деплой в DEV
- `release-*` / tag `v*.*.*` → деплой PROD (`k8s.prod-el`, `k8s.prod-xc`)

Настройка подписи коммитов согласно спеке https://wiki.wb.ru/space/540/devsecops/page/44/6.2.2%20-%20Nastrojka%20podpisi%20kommitov%20bez%20yubikey
чтобы не подписывать каждый раз при push оставьте passphrase пустым при создании ssh ключа.